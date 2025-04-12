const express = require('express');
const cors = require('cors');
const path = require('path'); // Needed for path.join
const users = require('./users.js'); // CORRECTED: Changed 'user.js' to 'users.js'
const fs = require('fs');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors()); // Enable CORS
app.use(express.json()); // Enable parsing JSON request bodies

const bookingsFile = 'bookings.json'; // Define outside if not already

// Login route
app.post('/login', (req, res) => {
  const { email, password } = req.body;

  // Basic validation
  if (!email || !password) {
    return res.status(400).json({ success: false, message: 'Email and password are required' });
  }

  // Find user (check email first, then password)
  const user = users.find(u => u.email === email);

  if (user && user.password === password) {
    // User found and password matches
    res.json({ success: true, message: 'Login successful' });
  } else {
    // User not found or password incorrect
    res.status(401).json({ success: false, message: 'Invalid email or password' });
  }
});

app.post('/book-restroom', (req, res) => {
    const { location, date, time } = req.body;

    // Basic validation on backend too
    if (!location || !date || !time) {
        return res.status(400).json({ success: false, message: 'Missing booking information.' });
    }

    const newBooking = { location, date, time };

    fs.readFile(bookingsFile, 'utf8', (err, data) => {
        let bookings = [];
        if (!err && data) {
             try {
                bookings = JSON.parse(data);
             } catch (parseError) {
                 console.error("Error parsing bookings.json:", parseError);
                 return res.status(500).json({ success: false, message: 'Server error reading booking data.' });
             }
        }

        bookings.push(newBooking);

        fs.writeFile(bookingsFile, JSON.stringify(bookings, null, 2), writeErr => {
            if (writeErr) {
                console.error("Error writing bookings.json:", writeErr);
                // Send JSON error response
                return res.status(500).json({ success: false, message: 'Error saving booking.' });
            }

            // Send JSON success response instead of HTML
            res.status(200).json({ success: true, message: 'Booking confirmed.' }); 
        });
    });
});

// --- ADDED: Static File Serving ---
// Serve files from the parent directory (where index.html, login.html etc. are)
const staticPath = path.join(__dirname, '..');
console.log(`Serving static files from: ${staticPath}`);
app.use(express.static(staticPath));

// --- ADDED: Optional Root Route ---
// Redirect root requests to index.html (your cover page)
// This ensures visiting http://localhost:3000/ shows the cover page
app.get('/', (req, res) => {
  res.sendFile(path.join(staticPath, 'index.html'));
});


// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
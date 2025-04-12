document.addEventListener('DOMContentLoaded', () => {

    const bookButton = document.getElementById('book-lehenga');
    const confirmationMsg = document.getElementById('lehenga-booking-confirmation');

    // Sample random locations
    const locations = [
        'Lalbagh Botanical Garden',
        'Cubbon Park Entrance',
        'Vidhana Soudha Steps',
        'Bangalore Palace Courtyard',
        'Ulsoor Lake Pier' 
    ];

    if (bookButton && confirmationMsg) {
        bookButton.addEventListener('click', () => {
            // Select a random location
            const randomLocation = locations[Math.floor(Math.random() * locations.length)];

            // Display confirmation message
            confirmationMsg.textContent = `Booking confirmed! Pickup/Photoshoot location: ${randomLocation}. Please contact provider for final details.`;
            confirmationMsg.style.display = 'block';

            // Optional: Disable button after booking
            bookButton.disabled = true;
            bookButton.textContent = 'Booked!';
            bookButton.style.backgroundColor = '#6c757d'; // Gray out
            bookButton.style.cursor = 'not-allowed';
        });
    }

}); 
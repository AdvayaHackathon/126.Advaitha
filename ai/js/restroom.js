document.addEventListener('DOMContentLoaded', () => {

    const bookingForm = document.getElementById('restroom-booking-form');
    const confirmationMsg = document.getElementById('restroom-confirm-msg');
    
    if (bookingForm && confirmationMsg) {
        bookingForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent default form submission

            const submitButton = bookingForm.querySelector('button[type="submit"]');
            const locationInput = document.getElementById('location');
            const dateInput = document.getElementById('date');
            const timeInput = document.getElementById('time');

            // Basic validation (still useful)
            if (!locationInput.value || !dateInput.value || !timeInput.value) {
                confirmationMsg.textContent = 'Please fill out all fields.';
                confirmationMsg.style.color = 'red';
                confirmationMsg.style.display = 'block';
                return; 
            }

            // --- Directly show success message (Removed fetch logic) --- 
            confirmationMsg.textContent = 'Booking successful! Mobile restroom on the way!';
            confirmationMsg.style.color = '#28a745'; // Green success color
            confirmationMsg.style.display = 'block';
            
            // Disable form elements after "booking"
            if(submitButton) {
                 submitButton.textContent = 'Requested';
                 submitButton.disabled = true;
                 submitButton.style.backgroundColor = '#6c757d';
                 submitButton.style.cursor = 'not-allowed';
            }
            locationInput.disabled = true;
            dateInput.disabled = true;
            timeInput.disabled = true;
        });
    }
}); 
document.addEventListener('DOMContentLoaded', () => {

    const bookingForm = document.getElementById('booking-form-south-india');
    const confirmationMsg = document.getElementById('package-booking-confirmation');
    const assistanceCheckbox = document.getElementById('assistance-needed');

    if (bookingForm && confirmationMsg && assistanceCheckbox) {
        bookingForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent actual form submission

            const needsAssistance = assistanceCheckbox.checked;
            let message = "Booking inquiry received!";
            
            if (needsAssistance) {
                message += " We have noted your request for disability assistance. Our team will contact you shortly.";
            } else {
                message += " Our team will contact you shortly to finalize details.";
            }

            // Display confirmation message
            confirmationMsg.textContent = message;
            confirmationMsg.style.display = 'block';

            // Optional: Disable form elements after submission
            const submitButton = bookingForm.querySelector('button[type="submit"]');
            if (submitButton) {
                submitButton.disabled = true;
                submitButton.textContent = 'Inquiry Sent';
                submitButton.style.backgroundColor = '#6c757d'; // Gray out
                 submitButton.style.cursor = 'not-allowed';
            }
             assistanceCheckbox.disabled = true;
        });
    }
}); 
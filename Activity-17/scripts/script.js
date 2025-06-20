document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting the traditional way

    var username = document.getElementById('username').value.trim(); // Added .trim()
    var email = document.getElementById('email').value.trim();     // Added .trim()
    var password = document.getElementById('password').value.trim(); // Added .trim()
    var phone = document.getElementById('phone').value.trim();     // New: Get phone value

    // Validation patterns
    var usernameValid = /^[a-zA-Z0-9]{5,}$/.test(username); // Username should be at least 5 characters long and contain only letters and numbers
    var emailValid = /^[^@]+@\w+(\.\w+)+\w$/.test(email); // Simple email pattern check (kept original for consistency)
    var passwordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/.test(password); // Password should be at least 8 characters long, contain numbers and both lowercase and uppercase letters
    
    // New: Phone number validation
    var phoneValid = /^\+?(\d[\s.-]?){7,}\d$/.test(phone); 

    // Username
    document.getElementById('usernameFeedback').textContent = usernameValid ? '' : 'Username should be at least 5 characters long and contain only letters and numbers.';
    document.getElementById('usernameFeedback').style.display = usernameValid ? 'none' : 'block';

    // Email
    document.getElementById('emailFeedback').textContent = emailValid ? '' : 'Please enter a valid email address.';
    document.getElementById('emailFeedback').style.display = emailValid ? 'none' : 'block';

    // Password
    document.getElementById('passwordFeedback').textContent = passwordValid ? '' : 'Password should be at least 8 characters long, contain numbers and both lowercase and uppercase letters.';
    document.getElementById('passwordFeedback').style.display = passwordValid ? 'none' : 'block';

    // New: Phone
    document.getElementById('phoneFeedback').textContent = phoneValid ? '' : 'Please enter a valid phone number (e.g., +1 555-123-4567 or 5551234567).';
    document.getElementById('phoneFeedback').style.display = phoneValid ? 'none' : 'block';


    var formValid = usernameValid && emailValid && passwordValid && phoneValid; // New: Include phoneValid

    if (formValid) {
        document.getElementById('registrationFeedback').textContent = 'Your user registration was accepted!';
        document.getElementById('registrationFeedback').classList.remove('feedback'); // Ensure no red styling
        document.getElementById('registrationFeedback').classList.add('valid-feedback'); // Add green styling
        document.getElementById('registrationFeedback').style.display = 'block';
        // In a real application, you would send data to the server here.
        // Show success
        console.log('Form submitted successfully:', { username, email, password, phone });
        // registrationForm.reset(); // Optionally clear the form after successful submission
    } else {
        document.getElementById('registrationFeedback').textContent = 'Please correct the errors in the form.'; // More specific error
        document.getElementById('registrationFeedback').classList.remove('valid-feedback'); // Ensure no green styling
        document.getElementById('registrationFeedback').classList.add('feedback'); // Add red styling
        document.getElementById('registrationFeedback').style.display = 'block';
    }
});
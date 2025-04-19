document.addEventListener('DOMContentLoaded', function() {
    // Get the login and register form containers
    const loginForm = document.getElementById('login');
    const registerForm = document.getElementById('register');

    // Function to toggle between login and register forms
    function showLoginForm() {
        loginForm.classList.add('active');
        registerForm.classList.remove('active');
    }

    function showRegisterForm() {
        registerForm.classList.add('active');
        loginForm.classList.remove('active');
    }

    // Get the links that will toggle between the forms
    const loginLink = document.querySelector('a[href="#login"]');
    const registerLink = document.querySelector('a[href="#register"]');

    // Add event listeners to toggle between the forms
    if (loginLink) {
        loginLink.addEventListener('click', function(event) {
            event.preventDefault();
            showLoginForm();
        });
    }

    if (registerLink) {
        registerLink.addEventListener('click', function(event) {
            event.preventDefault();
            showRegisterForm();
        });
    }

    // Show login form by default when the page is loaded
    showLoginForm();
});

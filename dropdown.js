document.addEventListener('DOMContentLoaded', function() {
    // Select all dropdown toggles
    const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
    
    // Function to close all dropdowns
    function closeAllDropdowns() {
        document.querySelectorAll('.dropdown').forEach(function(dropdown) {
            dropdown.style.display = 'none'; // Hide all dropdowns
        });
    }

    // Function to open the specific dropdown
    function openDropdown(event) {
        closeAllDropdowns(); // Close any open dropdowns before opening a new one
        const dropdown = event.currentTarget.querySelector('.dropdown');
        dropdown.style.display = 'block'; // Show the specific dropdown
    }

    // Function to close the dropdown when clicking anywhere outside the dropdown menu
    function closeDropdownOnClickOutside(event) {
        if (!event.target.closest('.dropdown-toggle') && !event.target.closest('.floater-nav')) {
            closeAllDropdowns(); // Close all dropdowns if clicking outside the dropdown or floater nav
        }
    }

    // Add event listeners for each dropdown toggle (RESOURCES, SETTINGS)
    dropdownToggles.forEach(function(toggle) {
        toggle.addEventListener('mouseenter', openDropdown); // Open on hover
        toggle.addEventListener('mouseleave', closeAllDropdowns); // Close on hover out
    });

    // Close dropdowns when clicking outside
    document.addEventListener('click', closeDropdownOnClickOutside);

    // Initially ensure all dropdowns are hidden on page load (in case of any persistent states)
    closeAllDropdowns(); // This ensures the dropdowns are not visible when the page is refreshed

    // Add click functionality to the floater-nav for dropdown toggle
    const floaterNav = document.querySelector('.floater-nav');
    const floaterDropdown = document.querySelector('.floater-dropdown'); // Assuming the dropdown is part of .floater-nav

    if (floaterNav && floaterDropdown) {
        // Toggle floater nav dropdown visibility on click
        floaterNav.addEventListener('click', function(event) {
            event.stopPropagation(); // Prevent triggering the outside click listener
            floaterDropdown.style.display = (floaterDropdown.style.display === 'block') ? 'none' : 'block';
        });
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".header-main-login");

    // Toggle dropdown visibility for the hamburger menu
    hamburger.addEventListener("click", () => {
        navMenu.classList.toggle("active");
    });

    // Close dropdown when clicking outside
    document.addEventListener("click", (event) => {
        if (!navMenu.contains(event.target) && !hamburger.contains(event.target)) {
            navMenu.classList.remove("active");
        }
    });

    // Toggle dropdown menus within navigation
    document.querySelectorAll(".dropdown-toggle").forEach(toggle => {
        toggle.addEventListener("click", (event) => {
            event.stopPropagation(); // Prevent triggering outside click
            const dropdown = toggle.querySelector(".dropdown");
            dropdown.classList.toggle("visible");
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".header-main-login");
    const dropdownToggles = document.querySelectorAll(".dropdown-toggle");
    const floaterNav = document.querySelector(".floater-nav");
    const floaterDropdown = document.querySelector(".floater-dropdown");
    let isSmallScreen = window.innerWidth <= 786;

    // Function to handle screen size changes
    function handleScreenResize() {
        isSmallScreen = window.innerWidth <= 786;

        if (isSmallScreen) {
            hamburger.style.display = "block";
            navMenu.classList.remove("active");
            floaterNav.style.display = "block";  // Show floater nav button
        } else {
            hamburger.style.display = "none";
            navMenu.classList.remove("active");
            floaterNav.style.display = "none";  // Hide floater nav button on large screens
            document.querySelectorAll(".dropdown").forEach((dropdown) => {
                dropdown.style.display = "none";
            });
        }
    }

    // Add event listeners for hamburger menu
    function initializeSmallScreenBehavior() {
        hamburger.addEventListener("click", () => {
            navMenu.classList.toggle("active");
        });

        document.addEventListener("click", (event) => {
            if (!navMenu.contains(event.target) && !hamburger.contains(event.target)) {
                navMenu.classList.remove("active");
            }
        });

        dropdownToggles.forEach((toggle) => {
            toggle.addEventListener("click", (event) => {
                event.stopPropagation();
                const dropdown = toggle.querySelector(".dropdown");
                dropdown.style.display =
                    dropdown.style.display === "block" ? "none" : "block";
            });
        });

        // Handle floater nav button click to toggle the floater dropdown
        floaterNav.addEventListener("click", (event) => {
            event.stopPropagation(); // Prevent click bubbling
            const isDropdownVisible = floaterDropdown.style.display === "block";
            floaterDropdown.style.display = isDropdownVisible ? "none" : "block"; // Toggle visibility
        });
    }

    // Initialize large screen hover behavior
    function initializeLargeScreenBehavior() {
        dropdownToggles.forEach((toggle) => {
            toggle.addEventListener("mouseenter", () => {
                const dropdown = toggle.querySelector(".dropdown");
                dropdown.style.display = "block";
            });
            toggle.addEventListener("mouseleave", () => {
                const dropdown = toggle.querySelector(".dropdown");
                dropdown.style.display = "none";
            });
        });
    }

    handleScreenResize();
    window.addEventListener("resize", handleScreenResize);

    if (isSmallScreen) {
        initializeSmallScreenBehavior();
    } else {
        initializeLargeScreenBehavior();
    }
});

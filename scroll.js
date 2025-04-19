window.addEventListener("scroll", function() {
    let contentSections = document.querySelectorAll(".expandable-content");
    contentSections.forEach(function(section) {
        let rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
            section.classList.add("active");  // Add a class to show content
        }
    });
});

const lazyLoadObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const target = entry.target;
            target.classList.add("active");  // Trigger the "active" class when visible
            observer.unobserve(target);  // Stop observing after it loads
        }
    });
});

// Select elements to observe
const lazyElements = document.querySelectorAll(".lazy-load");
lazyElements.forEach(el => {
    lazyLoadObserver.observe(el);  // Observe each element
});

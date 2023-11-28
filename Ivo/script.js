document.addEventListener("DOMContentLoaded", function() {
    const navItems = ['Home', 'Content']; // Add more items as needed
    const dynamicNav = document.getElementById('dynamic-nav');
    const menuToggle = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    // Populate the dynamic navbar
    navItems.forEach(item => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = `#${item.toLowerCase()}`;
        a.textContent = item;
        a.addEventListener('click', function() {
            showContent(item.toLowerCase());
            if (window.innerWidth <= 768) {
                navLinks.classList.toggle('show');
            }
        });
        li.appendChild(a);
        dynamicNav.appendChild(li);
    });

    // Show the home content section by default
    showContent('home');

    // Function to show content based on the clicked link
    function showContent(sectionId) {
        // Hide all content sections
        var sections = document.getElementsByClassName('content-section');
        for (var i = 0; i < sections.length; i++) {
            sections[i].style.display = 'none';
        }

        // Show the selected content section
        var selectedSection = document.getElementById(sectionId);
        if (selectedSection) {
            selectedSection.style.display = 'block';
        }
    }

    // Toggle mobile menu
    menuToggle.addEventListener('click', function() {
        navLinks.classList.toggle('show');
    });
});

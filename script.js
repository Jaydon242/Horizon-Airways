// Function to add interaction feedback to the CTA buttons
function addCTAFeedback() {
    // Select all elements with the 'primary-cta' class
    const buttons = document.querySelectorAll('.primary-cta');

    buttons.forEach(button => {
        // Change color slightly when hovering (for desktop emulation)
        button.addEventListener('mouseenter', () => {
            button.style.backgroundColor = '#0056b3'; // Darker blue
        });

        // Revert color when mouse leaves
        button.addEventListener('mouseleave', () => {
            button.style.backgroundColor = '#0d6efd'; // Original blue
        });

        // A clear click event for basic navigation or confirmation
        button.addEventListener('click', (event) => {
            event.preventDefault(); // Prevent actual navigation for this demo
            
            // Log interaction
            const userType = button.textContent;
            console.log(`Landing Page Click: ${userType} action taken.`);
            
            // Sublte immediate change to show click acknowledgement
            button.style.transition = 'none'; // Disable transition for instant feedback
            button.style.backgroundColor = '#fff'; // Temporary highlight
            button.style.color = '#0d6efd'; // Temporarily blue text

            // Reset after a brief moment
            setTimeout(() => {
                button.style.transition = 'background-color 0.2s ease, color 0.2s ease'; // Re-enable
                button.style.backgroundColor = '#0d6efd';
                button.style.color = '#fff';
            }, 150);
        });
    });
}

// Run the function when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', addCTAFeedback);

  document.addEventListener('DOMContentLoaded', () => {
    const openBtn = document.getElementById('open-menu');
    const closeBtn = document.getElementById('close-menu');
    const overlay = document.getElementById('nav-overlay');
    const navLinks = document.querySelectorAll('.menu-list a');

    // Function to toggle menu
    const toggleMenu = (isOpen) => {
        if (isOpen) {
            overlay.classList.add('open');
            document.body.style.overflow = 'hidden'; // Stop scrolling
        } else {
            overlay.classList.remove('open');
            document.body.style.overflow = 'auto'; // Re-enable scrolling
        }
    };

    // Event Listeners
    openBtn.addEventListener('click', () => toggleMenu(true));
    closeBtn.addEventListener('click', () => toggleMenu(false));

    // Close when a link is clicked (useful for "Home" or "Contact")
    navLinks.forEach(link => {
        link.addEventListener('click', () => toggleMenu(false));
    });
});

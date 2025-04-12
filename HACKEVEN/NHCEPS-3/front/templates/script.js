document.addEventListener('DOMContentLoaded', function() {
    // Get reference to the decorative image
    const decorImage = document.getElementById('decorImage');
    
    // Add click event listener to trigger spin animation
    decorImage.addEventListener('click', function() {
        // Remove the pulse animation temporarily
        this.classList.remove('pulse');
        
        // Add the spin animation
        this.classList.add('spin');
        
        // After spin animation completes, remove it and restore pulse
        setTimeout(() => {
            this.classList.remove('spin');
            this.classList.add('pulse');
        }, 1000); // 1000ms = 1 second (duration of spin animation)
    });
    
    // Animate on hover
    decorImage.addEventListener('mouseover', function() {
        this.style.transform = 'scale(1.1)';
    });
    
    decorImage.addEventListener('mouseout', function() {
        this.style.transform = 'scale(1)';
    });
    
});
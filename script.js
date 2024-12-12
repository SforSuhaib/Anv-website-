// Car animation on page load
window.onload = function() {
    // Move the car to the house position
    document.getElementById("car").style.left = "50%";  // Center it
    
    // After the car reaches the house, start the slideshow
    setTimeout(function() {
        startPhotoSlideshow();
    }, 5000); // Wait for 5 seconds for the car to move

    // Function to start the photo slideshow
    function startPhotoSlideshow() {
        let slides = document.querySelectorAll(".slide");
        let currentSlide = 0;

        function showSlide() {
            slides.forEach(slide => slide.style.display = "none"); // Hide all slides
            slides[currentSlide].style.display = "block"; // Show the current slide
            currentSlide = (currentSlide + 1) % slides.length; // Move to the next slide
        }

        setInterval(showSlide, 3000); // Change slides every 3 seconds
    }
};
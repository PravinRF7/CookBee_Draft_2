// Function to scroll to the center of the section
function scrollToCenter(event, sectionId) {
    event.preventDefault(); // Prevents the default link behavior (which reloads the page)
    const section = document.getElementById(sectionId);
    section.scrollIntoView({
        behavior: 'smooth',
        block: 'center' // Scroll to the center of the section
    });
}

// Select the elements to be animated (zoom effect)
const buttons = document.querySelectorAll('.button');

// Create an IntersectionObserver to detect when the buttons come into view (for zoom effect)
const zoomObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Add zoom class when the button is in view
            entry.target.classList.add('zoomed');
        } else {
            // Remove zoom class when the button is out of view
            entry.target.classList.remove('zoomed');
        }
    });
}, {
    root: null, // Observe in relation to the viewport
    rootMargin: '0px', // No margin to trigger earlier
    threshold: 0.9  // Trigger when 90% of the element is visible
});

// Attach the zoomObserver to each button
buttons.forEach(button => {
    zoomObserver.observe(button);
});

// Function to toggle shake effect when an element is in view
function toggleShake(entries, observer) {
    entries.forEach(entry => {
        const image = entry.target.querySelector('.toggle-image');
        if (entry.isIntersecting) {
            if (image) {
                image.classList.add('shake'); // Add the shake class when the section is in view
            }
        } else {
            if (image) {
                image.classList.remove('shake'); // Remove the shake class when it leaves
            }
        }
    });
}

// Create the IntersectionObserver for the shake effect
const shakeObserver = new IntersectionObserver(toggleShake, {
    root: null, // Observe in relation to the viewport
    rootMargin: '0px', // No margin, trigger when in viewport
    threshold: 0.1 // Trigger when 50% of the section is in view
});

// Observe each section that has a .toggle-image inside
document.querySelectorAll('section').forEach(section => {
    const toggleImage = section.querySelector('.toggle-image');
    if (toggleImage) {
        shakeObserver.observe(section);
    }
});

// Function to reposition the homechef steps after a delay on page load
window.onload = function() {
    setTimeout(function() {
        document.querySelector('.homechef-step-1').classList.add('correct-position');
        document.querySelector('.homechef-step-2').classList.add('correct-position');
        document.querySelector('.homechef-step-3').classList.add('correct-position');
    }, 500); // Adjust the delay as needed for effect
};


// Function to add 'shake' class on hover
// Select all images with a specific class (e.g., '.image-shake')
const images = document.querySelectorAll('.delivery-image');

// Function to add shake class
function addShakeEffect(image) {
    image.classList.add('shake');
}

// Function to remove shake class
function removeShakeEffect(image) {
    image.classList.remove('shake');
}

// Apply the shake effect to all images on page load
window.onload = function() {
    images.forEach(image => {
        addShakeEffect(image);
        // Optionally, remove the shake effect after some delay
        setTimeout(() => removeShakeEffect(image), 1000); // Adjust delay as needed
    });
};

// Loop through each image and apply the shake effect on hover
images.forEach(image => {
    image.addEventListener('mouseover', () => addShakeEffect(image));
    image.addEventListener('mouseout', () => removeShakeEffect(image));
});

window.onload = function() {
    // Select the logo element
    const logo = document.querySelector('.logo');
    
    // Add the animation class to trigger the zoom effect
    if (logo) {
        logo.classList.add('logo-zoomed');
        
        // Optional: remove the class after the animation finishes to allow re-triggering if needed
        setTimeout(() => {
            logo.classList.remove('logo-zoomed');
        }, 400); // Remove after 0.4 seconds (the animation duration)
    }
};


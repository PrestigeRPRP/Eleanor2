let next = document.querySelector('.next');
let prev = document.querySelector('.prev');
let items = document.querySelectorAll('.item');
let slideInterval; // Variable to hold the interval ID
const slideDuration = 10000; // 5 seconds

// Function to slide to the next item
function slideNext() {
    // Move the first item to the end of the list
    let firstItem = document.querySelector('.slide .item'); // Get the first item in the slide
    if (firstItem) {
        document.querySelector('.slide').appendChild(firstItem); // Move it to the end
    }
}

// Function to slide to the previous item
function slidePrev() {
    // Move the last item to the beginning of the list
    let items = document.querySelectorAll('.slide .item'); // Re-fetch items in case of DOM changes
    let lastItem = items[items.length - 1]; // Get the last item
    if (lastItem) {
        document.querySelector('.slide').prepend(lastItem); // Move it to the start
    }
}

// Start auto sliding
function startAutoSlide() {
    slideInterval = setInterval(slideNext, slideDuration);
}

// Stop auto sliding
function stopAutoSlide() {
    clearInterval(slideInterval);
}

// Event listeners for next and previous buttons
next.addEventListener('click', function() {
    stopAutoSlide(); // Stop auto sliding on click
    slideNext();
    startAutoSlide(); // Restart auto sliding
});

prev.addEventListener('click', function() {
    stopAutoSlide(); // Stop auto sliding on click
    slidePrev();
    startAutoSlide(); // Restart auto sliding
});

// Event listeners for each item to stop auto sliding on click
items.forEach(item => {
    item.addEventListener('click', function() {
        stopAutoSlide(); // Stop auto sliding on item click
    });
});

// Start the auto slide when the page loads
startAutoSlide();




let backgroundMusic = document.getElementById('background-music');

// Set the volume to 0.2
backgroundMusic.volume = 0.1;

// Function to play or resume background music
function playBackgroundMusic() {
    backgroundMusic.play();
}

// Function to pause background music
function pauseBackgroundMusic() {
    backgroundMusic.pause();
}

// Function to restart background music
function restartBackgroundMusic() {
    pauseBackgroundMusic();
    playBackgroundMusic();
}

document.addEventListener('DOMContentLoaded', function() {
    playBackgroundMusic();
    startAutoSlide();
});

next.addEventListener('click', function() {
    goToNext();
    resetAutoSlide();
    restartBackgroundMusic();
});

prev.addEventListener('click', function() {
    goToPrev();
    resetAutoSlide();
    restartBackgroundMusic();
});
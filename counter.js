// Get references to HTML elements
const countDisplay = document.getElementById('count-display');
const decrementBtn = document.getElementById('decrement-btn');
const resetBtn = document.getElementById('reset-btn');
const incrementBtn = document.getElementById('increment-btn');

// Initialize the counter value
let count = 0;

// Function to update the display
function updateDisplay() {
    countDisplay.textContent = count;
}

// Event listeners for buttons
incrementBtn.addEventListener('click', () => {
    count++;
    updateDisplay();
});

decrementBtn.addEventListener('click', () => {
    count--;
    updateDisplay();
});

resetBtn.addEventListener('click', () => {
    count = 0;
    updateDisplay();
});

// Initial display update
updateDisplay();
// Set the target date and time for the countdown (YYYY-MM-DD HH:MM:SS)
const targetDate = new Date('2023-9-31 23:59:59').getTime();

function updateCountdown() {
    // Get the current date and time
    const currentDate = new Date().getTime();
    
    // Calculate the remaining time
    const timeRemaining = targetDate - currentDate;
    
    // Calculate days, hours, minutes, and seconds
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
    
    // Display the countdown in the specified element
    const countdownElement = document.getElementById('countdown');
    countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    
    // Check if the countdown has reached zero
    if (timeRemaining <= 0) {
        countdownElement.innerHTML = "Countdown Expired!";
        clearInterval(interval); // Stop the countdown when it reaches zero
    }
}

// Update the countdown every second
const interval = setInterval(updateCountdown, 1000);

// Initial call to set the countdown on page load
updateCountdown();
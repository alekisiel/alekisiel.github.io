function getTimeRemaining(endDate) {
  const totalSeconds = (endDate - Date.now()) / 1000;
  const days = Math.floor(totalSeconds / (3600 * 24));
  const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = Math.floor(totalSeconds % 60);

  return {
    totalSeconds,
    days,
    hours,
    minutes,
    seconds
  };
}

// Function to update the countdown display
function updateCountdown() {
  const targetDate = new Date('2023-09-14T18:00:00').getTime();
  const timeRemaining = getTimeRemaining(targetDate);

  const countdownElement = document.getElementById('countdown');
  countdownElement.innerHTML = `${timeRemaining.days} dni, ${timeRemaining.hours} godzin, ${timeRemaining.minutes} minut, ${timeRemaining.seconds} sekund`;

  if (timeRemaining.totalSeconds <= 0) {
    clearInterval(countdownInterval);
    countdownElement.innerHTML = "The countdown has ended!";
  }
}

// Update the countdown every second
const countdownInterval = setInterval(updateCountdown, 1000);

// Run the updateCountdown function once on page load
updateCountdown();

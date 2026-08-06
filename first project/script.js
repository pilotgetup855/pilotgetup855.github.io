
function startLiveClock() {
    const clockContainer = document.getElementById('os-clock');
    
    setInterval(() => {
        const currentTime = new Date();
        const formattedTime = currentTime.toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: true
        });
        clockContainer.textContent = formattedTime;
    }, 1000);
}

document.addEventListener('DOMContentLoaded', startLiveClock);

const canvas = document.querySelector('#confetti');
const jsConfetti = new JSConfetti();

function createConfetti() {
  jsConfetti.addConfetti({
    confettiRadius: 2,
    
    confettiNumber: 200,
    confettiColor: ['#FF00FF', '#00FFFF', '#FFD700'],
    confettiRadius: 8,
    gravity: 1,
    wind: 10,
    rotation: 90,
    scalar: 1.3,
    ticks: 200,
    spread: 150,
    disableForReducedMotion: true, // Disable animation on reduced motion
  });

  // Add a delay of 2 seconds (2000 milliseconds) between each blast
  setTimeout(createConfetti, 2090);
}

createConfetti();


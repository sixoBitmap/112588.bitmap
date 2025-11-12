let currentIndex = 0; // keeps track of the current greeting

function sayHello() {
  const output = document.getElementById('output');
  const greetings = ['🟧', '🧱', '🌸'];

  // display the current emoji
  output.textContent = greetings[currentIndex];

  // move to the next one (and wrap around)
  currentIndex = (currentIndex + 1) % greetings.length;
}
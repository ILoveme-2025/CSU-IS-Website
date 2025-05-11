const quotes = [
  "Your Code, Your Impact—Transform the World!",
  "Innovate. Educate. Elevate.",
  "Where Ideas Become Digital Solutions.",
  "Empowering the Future Through Information Systems.",
  "Coding Tomorrow, Today."
];

function rotateQuote() {
  const quoteElement = document.getElementById("quote");
  const index = Math.floor(Math.random() * quotes.length);
  quoteElement.textContent = quotes[index];
}

window.onload = () => {
  rotateQuote();
  setInterval(rotateQuote, 8000); // changes every 8 seconds
};


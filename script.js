const messages = [
  "Dia uno sin ella: duele mucho",
  "Yanyra, eres todo para mi, no quiero olvidarte",
  "😭😭😭😭 Te extraño",
  "Te amo, dame otra oportunidad"
];

function createBubble() {
  const bubble = document.createElement('div');
  bubble.classList.add('bubble');
  bubble.innerText = messages[Math.floor(Math.random() * messages.length)];

  bubble.style.left = `${Math.random() * 100}%`;
  bubble.style.animationDuration = `${5 + Math.random() * 5}s`;
  bubble.style.fontSize = `${12 + Math.random() * 10}px`;

  document.getElementById('bubble-container').appendChild(bubble);

  setTimeout(() => {
    bubble.remove();
  }, 10000);
}

setInterval(createBubble, 800);

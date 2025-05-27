const messages = [
  "Yanyra ❤️",
  "Fea!",
  "Contigo todo es mejor 💕",
  "Cada día te quiero más 💫",
  "Con solo mirarte, se me olvidan los problemas 🥺",
  "Eres ese instante eterno que quiero repetir toda la vida 🌛",
  "Te pienso, y sonrío 🤭 JYRV",
  "Como dijo mi abuelita! jajaja",
  "No hay nada más bonito que verte feliz 🤗",
  "Eres esa canción que no me canso de escuchar (Otro atardecer) 🎵",
  "TQM🌠" ,
  "Tu eres la historia que no quiero que termine 🌌",
  "Gracias por existir y por ser tú 🦋",
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

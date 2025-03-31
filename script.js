document.getElementById("jugar").addEventListener("click", function() {
    alert("¡Bienvenido al Casino Virtual! Pronto agregaremos juegos.");
});
function spin() {
    const symbols = ['🍒', '🔔', '💎', '7️⃣', '🍋', '⭐'];
    document.getElementById('reel1').innerText = symbols[Math.floor(Math.random() * symbols.length)];
    document.getElementById('reel2').innerText = symbols[Math.floor(Math.random() * symbols.length)];
    document.getElementById('reel3').innerText = symbols[Math.floor(Math.random() * symbols.length)];
}


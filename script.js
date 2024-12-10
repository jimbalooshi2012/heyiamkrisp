// Typing Effect
const lines = [
    "Learning HTML, CSS, LuaU, JavaScript, and C++",
    "I love my Raspberry Pi",
    "Welcome to my website!",
    "Click on one of my links"
];
let currentLine = 0;
const typingElement = document.getElementById('typingEffect');

function typeLine() {
    let line = lines[currentLine];
    let index = 0;
    typingElement.textContent = '';

    const interval = setInterval(() => {
        typingElement.textContent += line[index++];
        if (index >= line.length) {
            clearInterval(interval);
            setTimeout(() => {
                currentLine = (currentLine + 1) % lines.length;
                typeLine();
            }, 2000);
        }
    }, 100);
}
typeLine();

// Rotating Banner
const facts = [
    "Did you know? The first computer was invented in 1943.",
    "Tech Fact: JavaScript was created in just 10 days.",
    "Fun Fact: Raspberry Pi was launched in 2012."
];
let factIndex = 0;
const factText = document.getElementById('factText');

setInterval(() => {
    factText.textContent = facts[factIndex];
    factIndex = (factIndex + 1) % facts.length;
}, 3000);

// Collapsible Menu
const menuButton = document.getElementById('menuButton');
const menuOverlay = document.getElementById('menuOverlay');
const closeMenu = document.getElementById('closeMenu');

menuButton.addEventListener('click', () => {
    menuOverlay.style.display = 'flex';
});

closeMenu.addEventListener('click', () => {
    menuOverlay.style.display = 'none';
});

// Background Music Controls
const music = document.getElementById('backgroundMusic');
const muteButton = document.getElementById('muteMusic');

muteButton.addEventListener('click', () => {
    music.muted = !music.muted;
    muteButton.textContent = music.muted ? '🔇' : '🔊';
});

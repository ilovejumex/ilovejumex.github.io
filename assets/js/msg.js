document.addEventListener("DOMContentLoaded", function() {
    const messages = [
        "the Interstellar devs tried to sell my cousin fent",
        "do your work retard",
        "unforgettable.dk/42.zip <-- rivals aimbot+scriptexecutor+autoshoot+wallhack for PC!",
        "steven loves femboys (5 months later he still does)",
        "nyx@ip-logger.com manden porno",
        "why is jio always so australian bro",
        "ultraviolet devs tried to sell my cousin vitamin gummies"
    ];

    const messageElement = document.getElementById("random-message");

    function updateMessage() {
        const randomMessage = messages[Math.floor(Math.random() * messages.length)];
        messageElement.textContent = randomMessage;
        messageElement.style.opacity = 0;
        messageElement.style.transform = "translateY(20px)";
        messageElement.style.transition = "opacity 0.6s ease, transform 0.6s ease, text-shadow 0.6s ease";

        setTimeout(() => {
            messageElement.style.opacity = 1;
            messageElement.style.transform = "translateY(0)";
            messageElement.style.textShadow = "0 0 10px black, 0 0 20px black, 0 0 30px black";
        }, 100);
    }

    updateMessage();
    setInterval(updateMessage, 2500);
});

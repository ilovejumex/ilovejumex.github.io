document.addEventListener("DOMContentLoaded", function() {
    const messages = [
        "the Interstellar devs tried to sell my cousin fent",
        "what if Cool Math Games was called Cool Meth Games",
        "FSKY admins tried to sell my cousin viagra",
        "unforgettable.dk/42.zip <-- rivals aimbot+scriptexecutor+autoshoot+wallhack for PC!",
        "steven loves femboys (5 months later he still does)",
        "sandwich makers PLEASE email nyx@ip-logger.com I am DESPERATE",
        "9,000 visits and I drop my Adobe Enterprise login",
        "",
        "ultraviolet devs tried to sell my cousin vitamin gummies",
        "jajajajaja"
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
    setInterval(updateMessage, 4000);
});

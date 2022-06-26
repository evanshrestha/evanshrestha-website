var welcomeMessage = "Hi, I'm Evan."
var welcomeIndex = 0

async function updateWelcomeMessage() {
    if (welcomeIndex < welcomeMessage.length) {
        welcomeIndex++;
        var newMessage = welcomeMessage.substring(0, welcomeIndex - 1) + "<span class='last-char'>" + welcomeMessage.substring(welcomeIndex - 1, welcomeIndex) + "</span>";
        document.getElementById('welcome-message').innerHTML = newMessage;
        setTimeout("updateWelcomeMessage()", 100)
    }
}
updateWelcomeMessage();

var aboutMessage = "Here's a little about me."
var aboutIndex = 0

async function updateAboutMessage() {
    if (aboutIndex < aboutMessage.length) {
        aboutIndex++;
        var newMessage = aboutMessage.substring(0, aboutIndex - 1) + "<span class='last-char'>" + aboutMessage.substring(aboutIndex - 1, aboutIndex) + "</span>";
        document.getElementById('about-message').innerHTML = newMessage;
        setTimeout("updateAboutMessage()", 100)
    }
}
updateAboutMessage();

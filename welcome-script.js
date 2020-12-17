var fullMessage = "Hi, I'm Evan."
var currIndex = 0

function updateMessage()
{
    if (currIndex < fullMessage.length) {
        currIndex++;
        var newMessage = fullMessage.substring(0, currIndex - 1) + "<span class='last-char'>" + fullMessage.substring(currIndex - 1, currIndex) + "</span>";
        document.getElementById('welcome-message').innerHTML = newMessage;
        setTimeout("updateMessage()", 100)
    }
}

updateMessage();
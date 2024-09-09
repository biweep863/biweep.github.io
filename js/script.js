const toggleButton = document.getElementsByClassName('toggle-button')[0];
const navbarLinks = document.getElementsByClassName('navbar-links')[0];

console.log(toggleButton);
toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active');
})


/* function createMessageElement(message) {
    const messageElement = document.createElement('li');
    messageElement.className = 'message';

    const nameElement = document.createElement('p');
    nameElement.innerText = 'Name: '+ message.name;

    const emailElement = document.createElement('p');
    emailElement.innerText = 'Email: ' + message.email;

    const commentElement = document.createElement('p');
    commentElement.innerText = 'Message: ' + message.comment;

    var date = new Date(message.timestamp);
    date.toString("MMM dd"); // "Dec 20"
    const timestampElement = document.createElement('p');
    timestampElement.innerText = 'Date: ' + date;

    messageElement.appendChild(nameElement);
    messageElement.appendChild(emailElement);
    messageElement.appendChild(commentElement);
    messageElement.appendChild(timestampElement);
    return messageElement;
} */
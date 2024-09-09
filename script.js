// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize event listeners
    setupFormListener();
    loadPortfolioProjects();
});

// Sets up the event listener for the contact form
function setupFormListener() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission
        if (validateForm()) {
            submitForm();
        }
    });
}

// Validates the contact form inputs
function validateForm() {
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;
    if (!name || !email || !message) {
        alert('Please fill in all fields.');
        return false;
    }
    if (!email.includes('@')) {
        alert('Please enter a valid email address.');
        return false;
    }
    return true;
}

// Handles the form submission
function submitForm() {
    let name = document.getElementById('name').value;
    alert('Thank you for your message, ' + name + '!');
    document.getElementById('contact-form').reset(); // Reset the form after submission
}

// Loads portfolio projects dynamically
function loadPortfolioProjects() {
    let projects = [
        { name: "Project 1", description: "This is a description of project 1." },
        { name: "Project 2", description: "This is a description of project 2." }
    ];

    let projectsContainer = document.getElementById('projects');
    projects.forEach(project => {
        let div = document.createElement('div');
        div.innerHTML = `<h3>${project.name}</h3><p>${project.description}</p>`;
        projectsContainer.appendChild(div);
    });
}

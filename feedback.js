document.getElementById('feedback-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    document.getElementById('response-message').textContent = `Thank you, ${name}! Your feedback has been submitted.`;
    this.reset();
});
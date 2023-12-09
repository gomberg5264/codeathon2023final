document.addEventListener("DOMContentLoaded", function () {

  const chatContent = document.querySelector('.chat-content');
  const inputField = document.querySelector('.chat-input');
  const sendButton = document.querySelector('.send-button');
  const responses = [
    "Please enter your first and last name.",
    "Please enter your email address.",
    "Please enter your address.",
    "Please enter the country you live in.",
    "Do you live in a remote area where you do not get USPS and DHL deliveries and need drone delivery? (yes/no)"
  ];
  let userResponse = {};
  let step = 0;

  function createBubble(text, type) {
    const bubble = document.createElement("div");
    bubble.textContent = text;
    bubble.classList.add('bubble', type);
    chatContent.appendChild(bubble);
    insertLineBreak();

    // Corrected scrolling functionality
    chatContent.scrollTop = chatContent.scrollHeight;
  }

  function insertLineBreak() {
    const linebreak = document.createElement("br");
    chatContent.appendChild(linebreak);
    const linebreak2 = document.createElement("br");
    chatContent.appendChild(linebreak2);
  }

  function nextStep() {
    if (step >= responses.length) {
      createBubble("Thank you for your details! We'll get back to you soon.", 'bot');
      inputField.style.display = 'none';
      sendButton.style.display = 'none';
    } else {
      createBubble(responses[step], 'bot');
      inputField.setAttribute('required', '');
    }
  }

  sendButton.addEventListener('click', function() {
    const inputValue = inputField.value.trim();
    if (inputValue) {
      createBubble(inputValue, 'user');
      userResponse[step] = inputValue;
      inputField.value = '';
      step++;
      nextStep();
    } else {
      inputField.reportValidity(); // trigger the browser's built-in field validation
    }
  });

  inputField.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
      e.preventDefault();
      sendButton.click();
    }
  });

  nextStep();
});

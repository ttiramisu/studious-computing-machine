const firebaseConfig = {
  apiKey: "AIzaSyDFOjyrTUdfhNmJ2pUcOhiHtwwGUGJhhmA",
  authDomain: "fir-first-test-a5e70.firebaseapp.com",
  projectId: "fir-first-test-a5e70",
  storageBucket: "fir-first-test-a5e70.appspot.com",
  messagingSenderId: "482023164814",
  appId: "1:482023164814:web:10135fe6e954521c1572df",
  measurementId: "G-7KH9S8T662"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

// Get a reference to the database service
const database = firebase.database();

const messagesRef = database.ref('messages');

// Listen for incoming messages
messagesRef.on('child_added', (snapshot) => {
  const message = snapshot.val();
  displayMessage(message);
});

const messageInput = document.getElementById('messageInput');
const sendButton = document.getElementById('sendButton');

// Send a message
function sendMessage() {
  const messageText = messageInput.value.trim();
  if (messageText !== '') {
    const newMessageRef = messagesRef.push();
    newMessageRef.set({
      text: messageText
    });
    messageInput.value = '';
  }
}

// Add event listener to send button
sendButton.addEventListener('click', sendMessage);

// Add event listener to message input for Enter key press
messageInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    event.preventDefault(); // Prevent the default form submission behavior
    sendMessage();
  }
});

// Display a message in the chat window
function displayMessage(message) {
  const { text } = message;
  const messageElement = document.createElement('div');
  messageElement.classList.add('message');

  const contentElement = document.createElement('span');
  contentElement.textContent = text;
  messageElement.appendChild(contentElement);

  const messagesContainer = document.getElementById('messages');
  messagesContainer.appendChild(messageElement);

  // Scroll to the bottom of the messages container
  messagesContainer.scrollTop = messagesContainer.scrollHeight;
}
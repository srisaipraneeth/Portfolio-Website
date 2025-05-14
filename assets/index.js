// Initialize a RiveScript bot instance
const bot = new RiveScript();

// Load RiveScript content directly
bot.stream(`
+ hello
- Hi there! How can I help you?

+hi
- Hello! How can I assist you today?

+ what is your name
- I'm your portfolio assistant bot.

+ what projects have you done
- I’ve built web apps, games, and tools. Visit the Projects section!

+ how can I contact you
- Use the contact form or email me at you@example.com





+ what is the amazon clone project
- The Amazon Clone is a static website I built using HTML and CSS that mimics the design of Amazon's homepage.

+ what technologies did you use for the amazon clone
- I used only HTML and CSS to build the Amazon Clone. It’s a fully static replica of the Amazon homepage.

+ is the amazon clone responsive
- Yes, the design is responsive and works well on different screen sizes.

+ does the amazon clone have any backend
- No, it’s a static project with no backend or real product functionality.

+ what features does the amazon clone have
- The clone includes a navbar, search bar, banner section, product categories, and a responsive layout.

+ can i search for products on the amazon clone
- No, since it’s a static project, the search bar is non-functional and only for visual purposes.

+ why did you build the amazon clone
- I built it to improve my HTML and CSS skills and practice layout techniques using a real-world reference.

+ where can i see the amazon clone project
- You can view the live demo or source code from the Projects section of my portfolio.

+ did you build the amazon clone from scratch
- Yes, I built it entirely from scratch by referring to the real Amazon homepage design.

+ is this project mobile friendly
- Yes! The layout adjusts for mobile devices using responsive CSS.

+ *
- Sorry, I can only answer questions about my Amazon Clone project. Try asking what it's about or what tech I used!

+ *
- Sorry, I don't know how to respond to that.
`);

// Sort replies after loading the RiveScript content
bot.sortReplies();

// Chat UI functionality
const toggle = document.getElementById("chatbot-toggle");
const box = document.getElementById("chatbot-box");
const messages = document.getElementById("chatbot-messages");
const sendButton = document.getElementById("chatbot-send");

toggle.addEventListener("click", () => {
  box.style.display = box.style.display === "flex" ? "none" : "flex";
});

sendButton.addEventListener("click", sendMessage);

function sendMessage() {
  const input = document.getElementById("user-input");
  const userMsg = input.value.trim();
  if (!userMsg) return;

  // Display the user's message in the chat
  messages.innerHTML += `<div><strong>You:</strong> ${userMsg}</div>`;

  // Get the bot's reply and display it
  bot.reply("local-user", userMsg).then(reply => {
    messages.innerHTML += `<div><strong>Bot:</strong> ${reply}</div>`;
    messages.scrollTop = messages.scrollHeight; // Scroll to the latest message
  }).catch(error => {
    console.error("Error generating reply:", error);
  });

  input.value = ""; // Clear the input field
}

// Add event listeners to the navigation divs
document.querySelector(".w.home").addEventListener("click", () => {
  document.querySelector(".h").scrollIntoView({ behavior: "smooth" });
});

document.querySelector(".w.about").addEventListener("click", () => {
  document.querySelector(".a").scrollIntoView({ behavior: "smooth" });
});

document.querySelector(".w.academics").addEventListener("click", () => {
  document.querySelector(".b").scrollIntoView({ behavior: "smooth" });
});

document.querySelector(".w.projects").addEventListener("click", () => {
  document.querySelector(".c").scrollIntoView({ behavior: "smooth" });
});








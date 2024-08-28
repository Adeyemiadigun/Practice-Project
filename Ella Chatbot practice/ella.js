class Chatbox {
    constructor() {
        this.args = {
            openButton: document.querySelector('.chatbox__button'),
            chatBox: document.querySelector('.chatbox__support'),
            sendButton: document.querySelector('.send__button')
        }

        this.state = false;
        this.messages = [];
    }

    display() {
        const {openButton, chatBox, sendButton} = this.args;

        openButton.addEventListener('click', () => this.toggleState(chatBox))

        sendButton.addEventListener('click', () => this.onSendButton(chatBox))

        const node = chatBox.querySelector('input');
        node.addEventListener("keyup", ({key}) => {
            if (key === "Enter") {
                this.onSendButton(chatBox)
            }
        })
    }

    toggleState(chatbox) {
        this.state = !this.state;

        // show or hides the box
        if(this.state) {
            chatbox.classList.add('chatbox--active')
        } else {
            chatbox.classList.remove('chatbox--active')
        }
    }

    onSendButton(chatbox) {
        var textField = chatbox.querySelector('input');
        let text1 = textField.value
        if (text1 === "") {
            return;
        }

        let msg1 = { name: "User", message: text1 }
        this.messages.push(msg1);

        fetch('AIzaSyDL_vNgvBa0JpvTLJk5Y2eXeskliSl0luo', {
            method: 'POST',
            body: JSON.stringify({ message: text1 }),
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
        })
        .then(r => r.json())
        .then(r => {
            let msg2 = { name: "Sam", message: r.answer };
            this.messages.push(msg2);
            this.updateChatText(chatbox)
            textField.value = ''

        }).catch((error) => {
            console.error('Error:', error);
            this.updateChatText(chatbox)
            textField.value = ''
        });
    }

    updateChatText(chatbox) {
        var html = '';
        this.messages.slice().reverse().forEach(function(item, index) {
            if (item.name === "Sam")
            {
                html += '<div class="messages__item messages__item--visitor">' + item.message + '</div>'
            }
            else
            {
                html += '<div class="messages__item messages__item--operator">' + item.message + '</div>'
            }
        });

        const chatmessage = chatbox.querySelector('.chatbox__messages');
        chatmessage.innerHTML = html;
    }
}


const chatbox = new Chatbox();
chatbox.display();



// Here is your code converted from Python to JavaScript:


// Import necessary packages
const os = require('os');
const genai = require('google-generativeai');
const TextBlob = require('textblob');

// Get API key from environment file
const google_api_key = os.getenv("GOOGLE_API_KEY");

// Configure API key for Google Generative AI
genai.configure({ apiKey: "AIzaSyDL_vNgvBa0JpvTLJk5Y2eXeskliSl0luo" });

// Convert text to plain format
function toPlainText(text) {
    const lines = text.split('\n');
    const formattedLines = [];
    lines.forEach((line) => {
        line = line.strip();
        if (line.startsWith('*')) {
            line = '- ' + line.substring(1).strip();
        }
        formattedLines.push(line);
    });
    return formattedLines.join('\n');
}

// Generate response from AI
function generateResponse(userInput, context) {
    const model = genai.GenerativeModel('gemini-1.5-flash');
    const prompt = `${context} ${userInput}`;
    const response = model.generateContent(prompt);
    return toPlainText(response.text);
}

// Analyze sentiment of user input
function analyzeSentiment(userInput) {
    const analysis = TextBlob(userInput);
    const sentiment = analysis.sentiment.polarity;
    if (sentiment > 0) {
        return "positive";
    } else if (sentiment < 0) {
        return "negative";
    } else {
        return "neutral";
    }
}

// Handle predefined questions and hotel details
function handleHotelDetails() {
console.log("Hello! I am Ella, your best hotel assistant to find any hotel in Nigeria.");
console.log("You can ask me about hotels in Nigeria, and I'll provide you with detailed information.");
while (true) {
    console.log("\nPlease choose one of the following options:");
    console.log("1. Ask about a hotel");
    console.log("2. Get recommendations based on budget");
    console.log("3. Exit");
    const option = prompt("Select an option (1, 2, 3): ").strip();
    if (option === '1') {
        const userInput = prompt("Tell Ella the hotel you want to know about: ").strip();
        if (!userInput) {
            console.log("Error! Please enter a valid hotel name.");
            continue;
        }
        const response = generateResponse(userInput, "Provide detailed information about the hotel the user asks about in Nigeria. Include address and features if possible.");
        if (response.includes("I'm sorry")) {
            console.log(`Response from Ella: I'm sorry, but I don't have information about that hotel. Please try another one.`);
        } else {
            console.log(`Response from Ella:\n${response}`);
        }
    } else if (option === '2') {
        console.log("Please enter your preferred hotel destination.");
        const destination = prompt("You: ").strip();
        console.log("Great! Now please select your budget range:");
        console.log("1. High budget (over $300 per night)");
        console.log("2. Mid budget ($150 - $300 per night)");
        console.log("3. Low budget (below $150 per night)");
        const budget = prompt("Select an option (1, 2, 3): ").strip();
        let budgetRange;
        if (budget === '1') {
            budgetRange = "high budget";
        } else if (budget === '2') {
            budgetRange = "mid budget";
        } else if (budget === '3') {
            budgetRange = "low budget";
        } else {
        console.log("Invalid budget option. Please try again.");
        continue;
        }
        const response = generateResponse(destination, `Provide hotel recommendations in ${destination} for a ${budgetRange} range. Include address and features if possible.`);
        console.log(`Response from Ella:\n${response}`);
    } else if (option === '3') {
        console.log("Thank you! Feel free to ask if you need more information about hotels in Nigeria. Goodbye!");
        break;
    } else {
        console.log("Invalid option. Please select a valid option (1, 2, 3).");
        continue;
    }
    const satisfaction = prompt("\nHow satisfied are you with the information provided by Ella? \nAnswer(Satisfied, Not satisfied, Neutral)").strip();
    const sentiment = analyzeSentiment(satisfaction);
    if (sentiment === "positive") {
        console.log("Thank you for your feedback! We will continue to improve Ella's responses.");
    } else if (sentiment === "negative") {
        console.log("Sorry to hear that you are not satisfied. Please provide more information about what we can help you with.");
    } else {
        console.log("Thank you for your feedback! We will continue to improve Ella's responses.");
    }
}
}

// Call the function
handleHotelDetails();

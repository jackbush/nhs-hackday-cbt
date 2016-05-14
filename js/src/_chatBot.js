var jquery = require('jquery');

var triggerSpotlight = jquery('.js-trigger-spotlight');
var triggerReflection = jquery('.js-trigger-reflection');

var messageContainer = jquery('.js-message-container');
var elMessageContainer = messageContainer[0];

var elUserInput = jquery('.js-user-input');

var content = require('./_chatContent.js');

// function checkNumberOfMessages () {
// 	return jquery('.message').length;
// }
// var numberOfMessages = checkNumberOfMessages();

function scrollToBottom () {
	elMessageContainer.scrollTop = elMessageContainer.scrollHeight;
}

function randomDelay () {
	return Math.random() * 1500 + 2000;
}

function sendMessage (copy) {
	var message = '<li class="message">' + copy + '<li>';
	messageContainer.append(message);
	scrollToBottom();
}

var activePath;
var activeMessages;
var currentMessage;

function runChat () {
	currentMessage += 1;
	if (currentMessage >= activeMessages.length) {
		return;
	}
	sendMessage(activeMessages[currentMessage]);
	// If message isn't a question, go again!
	if (activeMessages[currentMessage].slice(-1) !== '?') {
		setTimeout(runChat, randomDelay());
	}
}

function initChat (path) {
	currentMessage = -1;
	activePath = path;
	activeMessages = content[activePath].chat;
	runChat();
}

// var keys = Object.keys(content);
// keys = ["registration", "what", "why", "spotlight", "reflection", "help"]

triggerSpotlight.on('click', function (ev) {
	initChat('spotlight');
});

triggerReflection.on('click', function (ev) {
	initChat('reflection');
});

elUserInput.keypress(function (event) {
	if (event.which === 13) {
		setTimeout(runChat, randomDelay());
	}
});

initChat('registration');

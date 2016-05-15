var jquery = require('jquery');

var triggerSpotlight = jquery('.js-trigger-spotlight');

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

	// If it's the end of the script, go to homepage
	if (currentMessage >= activeMessages.length) {
		setTimeout(function () {
			jquery('.js-homepage').toggleClass('active');
		}, 3000);
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

triggerSpotlight.on('click', function (ev) {
	initChat('spotlight');
});

elUserInput.keypress(function (event) {
	if (event.which === 13) {
		setTimeout(runChat, randomDelay());
	}
});

// Start registration chat on load
initChat('registration');

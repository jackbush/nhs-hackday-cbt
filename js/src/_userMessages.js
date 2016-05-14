var $ = require('jquery');
var elUserInput = $('.js-user-input');
var elMessageContainer = $('.js-message-container');

function createUserMessage (copy) {
	elUserInput.val('');

	var message = '<li class="message message--user">' + copy + '<li>';

	elMessageContainer.append(message);

	// Fuck knows how, but the jquery object is
	// being treated as a zepto object here -- [0]
	// selector is to get the actual element
	var messageContainer = elMessageContainer[0];
	messageContainer.scrollTop = messageContainer.scrollHeight;
}

elUserInput.keypress(function (event) {
	if (event.which === 13) {
		createUserMessage(event.currentTarget.value);
		return false;
	}
});

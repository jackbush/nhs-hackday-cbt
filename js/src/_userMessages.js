var jquery = require('jquery');
var elUserInput = jquery('.js-user-input');
var elMessageContainer = jquery('.js-message-container');

function createUserMessage (copy) {
	elUserInput.val('');

	var message = '<li class="message message--user">' + copy + '<li>';

	elMessageContainer.append(message);

	// Now we get the actual element and scroll down
	var messageContainer = elMessageContainer[0];
	messageContainer.scrollTop = messageContainer.scrollHeight;
}

elUserInput.keypress(function (event) {
	if (event.which === 13) {
		createUserMessage(event.currentTarget.value);
		return false;
	}
});

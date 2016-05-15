var jquery = require('jquery');

var elHomepage = jquery('.js-homepage');
var elToggleHomepage = jquery('.js-toggle-homepage');

function focusInput () {
	jquery('.js-user-input').focus();
}

function toggleHomepage () {
	elHomepage.toggleClass('active');

	if (!elHomepage.hasClass('active')) {
		focusInput();
	}
}

elToggleHomepage.on('click', toggleHomepage);

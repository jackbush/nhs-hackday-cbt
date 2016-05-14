var $ = require('jquery');

var elHomepage = $('.js-homepage');
var elToggleHomepage = $('.js-toggle-homepage');

function toggleHomepage () {
	elHomepage.toggleClass('active');
}

elToggleHomepage.on('click', toggleHomepage);

var $ = window.jq = require('jquery');

var elHomepage = $('.js-homepage');
var elToggleHomepage = $('.js-toggle-homepage');

function toggleHomepage () {
	console.log('hi!');
	elHomepage.toggleClass('active');
}

elToggleHomepage.on('click', toggleHomepage);

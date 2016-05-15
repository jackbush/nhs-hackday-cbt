var $ = require('jquery');

var elHomepageImage = $('.js-alt-image');

function toggleImage () {
	elHomepageImage.toggleClass('alt');
}

elHomepageImage.on('click', toggleImage);

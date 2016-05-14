var $ = require('jquery');

var elTriggerSpotlight = $('.js-trigger-spotlight');
var elTriggerLog = $('.js-trigger-log');
var content = require('./_chatContent.js');

console.log(content);

function spotlightChat () {
	// console.log('spotlight');
}

function logChat () {
	// console.log('log');
}

elTriggerSpotlight.on('click', spotlightChat);
elTriggerLog.on('click', logChat);

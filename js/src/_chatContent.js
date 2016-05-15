module.exports = {
	registration: {
		title: 'registration',
		chat: [
			'Hello!',
			'Whats your name?',
			// It's hard-coded for now
			'Hi Chris! Would you mind telling me how old you are?',
			'Thanks :)',
			'Let me tell you more about this app!',
			'This app is designed to help people with functional neurological disorders (FND).',
			'One of the main treatments is Cognitive Behavioural Therapy (CBT)',
			'It is often hard to access and can involve lengthy waiting lists.',
			'With this app you can start on your journey through treatment before you see your specialist.',
			'This app helps in two ways:',
			'Spotlight sessions are for when you get symptoms and want to work through them.',
			'Reflection sessions help you keep a diary of your symptoms.',
			'It\'s common to experience more than one symptom. It is more useful, however, to focus on one at a time.',
			'Which symptom affects you most?',
				// Not sure how beneficial this is when we're taking plain text
				// Weakness
				// Pain
				// Tingling
				// Dizzy
				// Anxious
				// Headache
				// Fits
				// Forgetful
				// Tired
				// Sad
				// Twitches and jerks
				// Word finding difficulty
				// Spasm
				// Disconnected
				// Trembling
				// Swallowing difficulty
				// Limb stiffness
			'What are your long-term goals?',
			// {
			// 	type: 'hint',
			// 	chat: 'It may be something such as being able to walk the dog, or drive a car.'
			// },
			'Do you want to know more about how CBT works?',
			// Yep!
			'Cognitive Behavioural Therapy works by doing a few things!',
			'It shows how your thoughts and symptoms are linked,',
			'It builds an understanding how your situation affect emotions, thoughts, behaviours and physical symptoms.',
			'It teaches ways to re-programme unhelpful responses.',
			'Start a new session from the homepage :)',
			'Bye for now!'
		]
	},
	spotlight: {
		title: 'Spotlight',
		chat: [
			'Hi there!',
			'What did you experience?',
			'What were your physical symptoms?',
			// {
			// 	type: 'hint',
			// 	chat: 'Things like shoulder aches, arm feeling heavy and weak, dizziness, twitching.''
			// }
			'What were you thinking about at the time?',
			// {
			// 	type: 'hint',
			// 	chat: 'This could be things like I am a failure, everyone is looking at me, I can’t cope.'
			// }
			'How did that make you feel? What emotions did you experience?',
			// {
			// 	type: 'hint',
			// 	chat: 'Maybe you felt angry, sad, embarrassed, or lonely?'
			// }
			'How did this affect your behaviour?',
			// {
			// 	type: 'hint',
			// 	chat: 'Did you leave room to escape, avoid eye contact, having a drink, or avoid leaving the house?'
			// }
			'Well done for completing the first part of your spotlight!',
			'Now we\'re going to do some reflection on your experience :)',
			'Did anything you that you experienced or did make things worse?',
			'How could you change regarding your thoughts/emotions/physical experience/behaviour to make this better next time?',
			'Well done completing your spotlight reflection!',
			'Would you like to do more relaxation/focus?',
			'How was today?',
			'On a scale from one to ten...',
			'How are you today?',
			'How much do you notice your symptom now?',
			'How much have your symptoms impacted on your day?',
			'Would you like to add any extra thoughts?',
			'Catch you next time!'
		]
	},
	/*

	'Focus/Relaxation techniques': [
	// 1)Mindful Breathing
	// Breathe in while the shape is unfolding, breathe out while the shape refolds.
	// Repeat until you feel able to continue.

	// 2)Finger tap:
	// On both hands tap your index finger on your thumb, moving on to tap each finger and then back again. Repeat this until you feel able to continue.

	// Insert GIF

	// 3) Mindfulness:
	// Whatever you do, be in this moment. Focus your attention, notice what you see around you. Listen to the sounds around. Notice your senses, smell, touch, hearing. Reach out and touch what is within reach - the chair, the floor. Notice those sensations of breathing in your body. Take a deep breath. Simply notice as thoughts and sensations come to mind, then gently re-focus. Be patient and kind with yourself. Describe your experiences and what you notice, rather than judging. It is as it is. It will pass.

	// 4) Distraction:
	// Insert audio
	],

	*/
	// This is now part of the spotlight!
	reflection: {
		title: 'Spotlight reflection',
		chat: [
			'Did anything you that you experienced or did make things worse?',
			'How could you change regarding your thoughts/emotions/physical experience/behaviour to make this better next time?',
			'Well done completing your spotlight reflection!',
			'Would you like to do more relaxation/focus?',
			'How was today?',
			'On a scale from one to ten...',
			'How are you today?',
			'How much do you notice your symptom now?',
			'How much have your symptoms impacted on your day?',
			'Would you like to add any extra thoughts?',
			'Catch you next time!'
		]
	},
	// And these guys are now part of a static info page :)
	what: {
		title: 'What is FND?',
		chat: [
			'Functional neurological symptoms is an umbrella term use for a variety of symptoms which relate to neurological features which are not due to physical damage to the nervous system.',
			'These symptoms arise due to a problem with the function, rather than structure of the nervous system.',
			'It is quite common for the diagnosis of functional neurological disorders to take a long time, and patients often find that they have seen multiple specialist before they receive the diagnosis. This process can sometimes be frustrating.',
			'It’s useful to think of the problem as being due to messages which are not being communicated effectively between the brain and body.',
			'It\'s like a computer having a software problem rather than a hardware problem.'
		]
	},
	why: {
		title: 'Why do I have FND?',
		chat: [
			'Often we do not know 100% why the symptoms started and our models of why people get functional symptoms are incomplete.',
			'There are many potential reasons why someone might become vulnerable to functional symptoms.  There might be things that happened before the symptoms started (Predisposing Factors); things that happened around the time that the symptoms started (Precipitating Factors) and things that happened after the symptoms started (Perpetuating or Maintaining Factors).',
			'What is the treatment?',
			'The treatment of FND depends largely on the specific symptoms, but is usually a combination of psychological therapy, physiotherapy, occupational therapy, and psychiatric input.',
			'CBT approaches have been used successfully as part of the psychological therapy process, and this is the main aspect we focus on in this app.'
		]
	},
	help: {
		title: 'Help and support',
		chat: [
			'Further information about FND can be sought from <a href="http://fndhope.org/">FND Hope Charity</a>',
			'If you are in crisis please consider contacting the <a href="http://samaritans.org">Samaritans</a> on 115123'
		]
	}
};

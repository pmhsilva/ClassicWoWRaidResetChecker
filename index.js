const Discord = require('discord.js');
const fetch = require('node-fetch');
const {	prefix, token, cmdMCUS, cmdBWLUS, cmdOnyUS, cmdZGUS, cmdMCEU, cmdBWLEU, cmdOnyEU, cmdZGEU, cmdAllUS, cmdAllEU, cmdAllResets } = require('./config.json');
const client = new Discord.Client();

function calculateRaidResets(){
	const DAYS = 24 * 3600 * 1000;

	const countdowns = [{
		id: "mcReset",
		helper: "mcHelper",
		timestamp: new Date("Dec 10, 2019 11:00:00 GMT-05:00").getTime(),
		interval: 7 * DAYS
	  },
	  {
		id: "onyReset",
		helper: "onyHelper",
		timestamp: new Date("Dec 6, 2019 11:00:00 GMT-05:00").getTime(),
		interval: 5 * DAYS
	  },
			{
		id: "zgReset",
		helper: "zgHelper",
		timestamp: new Date("Apr 16, 2020 11:00:00 GMT-5:00").getTime(),
		interval: 3 * DAYS
		},
		{
		id: "euMcReset",
		helper: "euMcHelper",
		timestamp: new Date("Dec  4, 2019 02:00:00 GMT-05:00").getTime(),
		interval: 7 * DAYS
	  },
		{
		id: "euOnyReset",
		helper: "euOnyHelper",
		timestamp: new Date("Dec  10, 2019 02:00:00 GMT-05:00").getTime(),
		interval: 5 * DAYS
	  },
		{
		id: "euZgReset",
		helper: "euZgHelper",
		timestamp: new Date("Apr 16, 2020 02:00:00 GMT-05:00").getTime(),
		interval: 3 * DAYS
	  },
	];

	setInterval(() => {
	  const now = new Date().getTime();
	  countdowns.forEach(c => {
		while (c.timestamp < now) c.timestamp += c.interval;
		const tSecs = Math.floor((c.timestamp - now) / 1000);
		const secs = tSecs % 60;
		const tMins = (tSecs - secs) / 60;
		const mins = tMins % 60;
		const tHours = (tMins - mins) / 60;
		const hours = tHours % 24;
		const days = (tHours - hours) / 24;
		const reset = new Date(c.timestamp);
		// document.getElementById(c.id).textContent = `${days}d ${hours}h ${mins}m ${secs}s`;
		// document.getElementById(c.helper).textContent= `${reset}`;
	  });
	}, 1000);
	
	return countdowns;
}

function getResetTimerAndDate (countdown)
{
	const now = new Date().getTime();
	while (countdown.timestamp < now) countdown.timestamp += countdown.interval;
		const tSecs = Math.floor((countdown.timestamp - now) / 1000);
		const secs = tSecs % 60;
		const tMins = (tSecs - secs) / 60;
		const mins = tMins % 60;
		const tHours = (tMins - mins) / 60;
		const hours = tHours % 24;
		const days = (tHours - hours) / 24;
		const reset = new Date(countdown.timestamp);
		var resetTimer = `${days}d ${hours}h ${mins}m ${secs}s`;
		var resetDate = `${reset}`;
		
		return [resetTimer, resetDate];
	
}
client.once('ready', () => {
	console.log('Ready!')
})

client.login(token);

client.on('message', message => {
	if (message.author.bot){
		// ignore bot's own messages
	} else {
		var countdowns = calculateRaidResets();
		if(message.content.startsWith(`${prefix}${cmdMCUS}`)) { // Molten Core US Reset date/time
			countdowns.forEach(c => {
				if (c.id == 'mcReset' && c.helper == 'mcHelper') {
					var resetValues = getResetTimerAndDate (c);
					var resetTimer = resetValues[0];
					var resetDate = resetValues[1];
					var outputMessage = "Molten Core - US Servers - will reset in " + resetTimer + ", on " + resetDate + ".";
					message.channel.send(outputMessage);
				}
			})
		} else if (message.content.startsWith(`${prefix}${cmdBWLUS}`)) { // BWL US Reset date/time 
				countdowns.forEach(c => {
				if (c.id == 'mcReset' && c.helper == 'mcHelper') {
					var resetValues = getResetTimerAndDate (c);
					var resetTimer = resetValues[0];
					var resetDate = resetValues[1];
					var outputMessage = "Blackwing Lair - US Servers - will reset in " + resetTimer + ", on " + resetDate + ".";
					message.channel.send(outputMessage);
				}
			})
		} else if (message.content.startsWith(`${prefix}${cmdOnyUS}`)) { // Onyxia's Lair US Reset date/time 
				countdowns.forEach(c => {
				if (c.id == 'onyReset' && c.helper == 'onyHelper') {
					var resetValues = getResetTimerAndDate (c);
					var resetTimer = resetValues[0];
					var resetDate = resetValues[1];
					var outputMessage = "Onyxia's Lair - US Servers - will reset in " + resetTimer + ", on " + resetDate + ".";
					message.channel.send(outputMessage);
				}
			})
		} else if (message.content.startsWith(`${prefix}${cmdZGUS}`)) { // Zul'Gurub US Reset date/time 
				countdowns.forEach(c => {
				if (c.id == 'zgReset' && c.helper == 'zgHelper') {
					var resetValues = getResetTimerAndDate (c);
					var resetTimer = resetValues[0];
					var resetDate = resetValues[1];
					var outputMessage = "Zul'Gurub - US Servers - will reset in " + resetTimer + ", on " + resetDate + ".";
					message.channel.send(outputMessage);
				}
			})
		} else if(message.content.startsWith(`${prefix}${cmdMCEU}`)) { // Molten Core EU Reset date/time 
				countdowns.forEach(c => {
				if (c.id == 'euMcReset' && c.helper == 'euMcHelper') {
					var resetValues = getResetTimerAndDate (c);
					var resetTimer = resetValues[0];
					var resetDate = resetValues[1];
					var outputMessage = "Molten Core - EU Servers - will reset in " + resetTimer + ", on " + resetDate + ".";
					message.channel.send(outputMessage);
				}
			})
		} else if (message.content.startsWith(`${prefix}${cmdBWLEU}`)) { // BWL EU Reset date/time 
				countdowns.forEach(c => {
				if (c.id == 'euMcReset' && c.helper == 'euMcHelper') {
					var resetValues = getResetTimerAndDate (c);
					var resetTimer = resetValues[0];
					var resetDate = resetValues[1];
					var outputMessage = "Blackwing Lair - EU Servers - will reset in " + resetTimer + ", on " + resetDate + ".";
					message.channel.send(outputMessage);
				}
			})
		} else if (message.content.startsWith(`${prefix}${cmdOnyEU}`)) { // Onyxia's Lair EU Reset date/time 
				countdowns.forEach(c => {
				if (c.id == 'euOnyReset' && c.helper == 'euOnyHelper') {
					var resetValues = getResetTimerAndDate (c);
					var resetTimer = resetValues[0];
					var resetDate = resetValues[1];
					var outputMessage = "Onyxia's Lair - EU Servers - will reset in " + resetTimer + ", on " + resetDate + ".";
					message.channel.send(outputMessage);
				}
			})
		} else if (message.content.startsWith(`${prefix}${cmdZGEU}`)) { // Zul'Gurub EU Reset date/time 
				countdowns.forEach(c => {
				if (c.id == 'euZgReset' && c.helper == 'euZgHelper') {
					var resetValues = getResetTimerAndDate (c);
					var resetTimer = resetValues[0];
					var resetDate = resetValues[1];
					var outputMessage = "Zul'Gurub - EU Servers - will reset in " + resetTimer + ", on " + resetDate + ".";
					message.channel.send(outputMessage);
				}
			})
		} else if (message.content.startsWith(`${prefix}${cmdAllUS}`)) { // All US Raids Reset dates/times 
				countdowns.forEach(c => {
				if (c.id == 'mcReset' && c.helper == 'mcHelper') {
					var resetValues = getResetTimerAndDate (c);
					var resetTimer = resetValues[0];
					var resetDate = resetValues[1];
					var outputMessage = "Molten Core & Blackwing Lair - US Servers - will reset in " + resetTimer + ", on " + resetDate + ".";
					message.channel.send(outputMessage);
				} else if (c.id == 'onyReset' && c.helper == 'onyHelper') {
					var resetValues = getResetTimerAndDate (c);
					var resetTimer = resetValues[0];
					var resetDate = resetValues[1];
					var outputMessage = "Onyxia's Lair - US Servers - will reset in " + resetTimer + ", on " + resetDate + ".";
					message.channel.send(outputMessage);
				} else if (c.id == 'zgReset' && c.helper == 'zgHelper') {
					var resetValues = getResetTimerAndDate (c);
					var resetTimer = resetValues[0];
					var resetDate = resetValues[1];
					var outputMessage = "Zul'Gurub - US Servers - will reset in " + resetTimer + ", on " + resetDate + ".";
					message.channel.send(outputMessage);
				}
			})
		} else if (message.content.startsWith(`${prefix}${cmdAllEU}`)) { // All EU Raids Reset dates/times 
				countdowns.forEach(c => {
				if (c.id == 'euMcReset' && c.helper == 'euMcHelper') {
					var resetValues = getResetTimerAndDate (c);
					var resetTimer = resetValues[0];
					var resetDate = resetValues[1];
					var outputMessage = "Molten Core & Blackwing Lair - EU Servers - will reset in " + resetTimer + ", on " + resetDate + ".";
					message.channel.send(outputMessage);
				} else if (c.id == 'euOnyReset' && c.helper == 'euOnyHelper') {
					var resetValues = getResetTimerAndDate (c);
					var resetTimer = resetValues[0];
					var resetDate = resetValues[1];
					var outputMessage = "Onyxia's Lair - EU Servers - will reset in " + resetTimer + ", on " + resetDate + ".";
					message.channel.send(outputMessage);
				} else if (c.id == 'euZgReset' && c.helper == 'euZgHelper') {
					var resetValues = getResetTimerAndDate (c);
					var resetTimer = resetValues[0];
					var resetDate = resetValues[1];
					var outputMessage = "Zul'Gurub - EU Servers - will reset in " + resetTimer + ", on " + resetDate + ".";
					message.channel.send(outputMessage);
				}
			})
		} else if (message.content.startsWith(`${prefix}${cmdAllResets}`)) { // All US + EU Raids Reset dates/times
			countdowns.forEach(c => {
				if (c.id == 'mcReset' && c.helper == 'mcHelper') {
					var resetValues = getResetTimerAndDate (c);
					var resetTimer = resetValues[0];
					var resetDate = resetValues[1];
					var outputMessage = "Molten Core & Blackwing Lair - US Servers - will reset in " + resetTimer + ", on " + resetDate + ".";
					message.channel.send(outputMessage);
				} else if (c.id == 'onyReset' && c.helper == 'onyHelper') {
					var resetValues = getResetTimerAndDate (c);
					var resetTimer = resetValues[0];
					var resetDate = resetValues[1];
					var outputMessage = "Onyxia's Lair - US Servers - will reset in " + resetTimer + ", on " + resetDate + ".";
					message.channel.send(outputMessage);
				} else if (c.id == 'zgReset' && c.helper == 'zgHelper') {
					var resetValues = getResetTimerAndDate (c);
					var resetTimer = resetValues[0];
					var resetDate = resetValues[1];
					var outputMessage = "Zul'Gurub - US Servers - will reset in " + resetTimer + ", on " + resetDate + ".";
					message.channel.send(outputMessage);
				}
				if (c.id == 'euMcReset' && c.helper == 'euMcHelper') {
					var resetValues = getResetTimerAndDate (c);
					var resetTimer = resetValues[0];
					var resetDate = resetValues[1];
					var outputMessage = "Molten Core & Blackwing Lair - EU Servers - will reset in " + resetTimer + ", on " + resetDate + ".";
					message.channel.send(outputMessage);
				} else if (c.id == 'euOnyReset' && c.helper == 'euOnyHelper') {
					var resetValues = getResetTimerAndDate (c);
					var resetTimer = resetValues[0];
					var resetDate = resetValues[1];
					var outputMessage = "Onyxia's Lair - EU Servers - will reset in " + resetTimer + ", on " + resetDate + ".";
					message.channel.send(outputMessage);
				} else if (c.id == 'euZgReset' && c.helper == 'euZgHelper') {
					var resetValues = getResetTimerAndDate (c);
					var resetTimer = resetValues[0];
					var resetDate = resetValues[1];
					var outputMessage = "Zul'Gurub - EU Servers - will reset in " + resetTimer + ", on " + resetDate + ".";
					message.channel.send(outputMessage);
				}
			})
		} else {
			message.channel.send("That's not a command recognized by Classic WoW Raid Reset Bot Checker!")
		}
	}
}) 
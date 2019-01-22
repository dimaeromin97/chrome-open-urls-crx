const urlFinder = require('./url-finder.js');
const Current_Tab = require('./current-tab.js');
const details = chrome.app.getDetails();

chrome.contextMenus.removeAll();

chrome.contextMenus.create({
	title: details.name,
	type: 'normal',
	contexts: ['all'],
	onclick(info, tab) {
		chrome.tabs.executeScript( tab.id, {
			code: 'window.getSelection().toString()'
		}, (response) => {
			const [selected] = response;
			const urls = urlFinder(selected);
			
			urls.forEach( urlItem => {
				chrome.tabs.create({
					url: urlItem
				});
			});
		});
	}
});
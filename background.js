let refreshInterval = 60;

chrome.runtime.onInstalled.addListener(() => {
    chrome.alarms.create('refreshAlarm', { periodInMinutes: refreshInterval / 60 });
    console.log('Extension installed. Initial refresh interval set to', refreshInterval, 'seconds.');
});

chrome.alarms.onAlarm.addListener((alarm) => {
    if (alarm.name === 'refreshAlarm') {
        refreshPage();
    }
});

function refreshPage() {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        if (tabs.length > 0 && tabs[0].url.includes('results.elections.org.za/dashboards/npe')) {
            chrome.tabs.reload(tabs[0].id, () => {
                console.log('Page refreshed at', new Date().toLocaleTimeString());
            });
        }
    });
}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'setInterval') {
        refreshInterval = request.interval;
        chrome.alarms.create('refreshAlarm', { periodInMinutes: refreshInterval / 60 });
        sendResponse({ status: 'success' });
        console.log('Refresh interval set to', refreshInterval, 'seconds.');
    }
});

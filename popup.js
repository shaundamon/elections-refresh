document.getElementById('setInterval').addEventListener('click', () => {

    const interval = parseInt(document.getElementById('interval').value, 10);
    
    if (interval >= 10) {
        chrome.runtime.sendMessage({ action: 'setInterval', interval: interval }, (response) => {
    
            if (response.status === 'success') {
                alert('Refresh interval set to ' + interval + ' seconds.');
            }
        });
    } else {
        alert('Interval must be at least 10 seconds.');
    }
});

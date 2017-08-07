var extensionIsActive = true;

chrome.browserAction.onClicked.addListener(function(tab) {
  if(extensionIsActive){
    chrome.browserAction.setIcon({path: 'images/icon48-off.png'});
    chrome.tabs.executeScript({ file: 'app/transition-off.js' });
    extensionIsActive = false;
  } else {
    chrome.browserAction.setIcon({path: 'images/icon48.png'});
    chrome.tabs.executeScript({ file: 'app/transition-on.js' });
    extensionIsActive = true;
  }
});

chrome.tabs.onUpdated.addListener( function (tabId, changeInfo, tab) {
  if (changeInfo.status == 'complete' && !extensionIsActive) {
    chrome.tabs.executeScript({ file: 'app/transition-off.js' });

  }
});
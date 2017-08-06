var extensionIsActive = true;

chrome.browserAction.onClicked.addListener(function() {
  if(extensionIsActive){
    chrome.browserAction.setIcon({path: 'images/icon48-off.png'});
    extensionIsActive = false;
  } else {
    chrome.browserAction.setIcon({path: 'images/icon48.png'});
    extensionIsActive = true;
  }
});

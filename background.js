function updateIcon() {
  chrome.tabs.query({}, function(tabs) {
    let loadingTabs = tabs.filter(tab => tab.status === 'loading');
    if (loadingTabs.length > 0) {
      chrome.browserAction.setIcon({ path: "loading.gif" });
      chrome.browserAction.setBadgeText({ text: String(loadingTabs.length) });
    } else {
      chrome.browserAction.setIcon({ path: "icon.png" });
      chrome.browserAction.setBadgeText({ text: '' });
    }
  });
}
chrome.tabs.onUpdated.addListener(updateIcon);
chrome.tabs.onCreated.addListener(updateIcon);
chrome.tabs.onRemoved.addListener(updateIcon);
chrome.tabs.onReplaced.addListener(updateIcon);
chrome.windows.onFocusChanged.addListener(updateIcon);
updateIcon();
setInterval(updateIcon, 1000);

function updateIcon() {
  chrome.tabs.query({}, function(tabs) {
    let loading = false;
    for (let tab of tabs) {
      if (tab.status === 'loading') {
        loading = true;
        break;
      }
    }
    let iconPath = loading ? "loading.gif" : "icon.png";
    chrome.browserAction.setIcon({ path: iconPath });
  });
}
chrome.tabs.onUpdated.addListener(updateIcon);
chrome.tabs.onCreated.addListener(updateIcon);
chrome.tabs.onRemoved.addListener(updateIcon);
updateIcon();
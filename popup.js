function updateLoadingTabs() {
  chrome.tabs.query({}, function(tabs) {
    let loadingTabs = tabs.filter(tab => tab.status === 'loading');
    document.getElementById('loadingTabsCount').textContent = `Loading tabs: ${loadingTabs.length}`;
    let list = document.getElementById('loadingTabsList');
    list.innerHTML = '';
    loadingTabs.forEach(tab => {
      let listItem = document.createElement('li');
      listItem.textContent = tab.title;
      listItem.title = tab.title;
      listItem.style.cursor = 'pointer';
      listItem.addEventListener('click', function() {
        chrome.tabs.update(tab.id, { active: true });
        window.close();
      });
      list.appendChild(listItem);
    });
  });
}
function checkForClosedTabs() {
  chrome.tabs.query({}, function(tabs) {
    let loadingTabs = tabs.filter(tab => tab.status === 'loading');
    let list = document.getElementById('loadingTabsList').children;
    let listArray = Array.from(list);
    listArray.forEach((listItem) => {
      let tabExists = loadingTabs.some(tab => tab.title === listItem.textContent);
      if (!tabExists) {
        listItem.remove();
      }
    });
  });
}
function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
  const isDarkMode = document.body.classList.contains('dark-mode');
  localStorage.setItem('darkMode', isDarkMode ? 'enabled' : 'disabled');
}
document.addEventListener('DOMContentLoaded', function () {
  const darkModeStatus = localStorage.getItem('darkMode');
  if (darkModeStatus === 'enabled') {
    document.body.classList.add('dark-mode');
  }
  document.getElementById('darkModeToggle').addEventListener('click', toggleDarkMode);
  updateLoadingTabs();
  setInterval(updateLoadingTabs, 1000);

});

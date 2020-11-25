'use strict';
chrome.runtime.onInstalled.addListener(function() {
  chrome.contextMenus.create({
    title: "Search AllTrails for '%s'",
    id: 'search-alltrails-for-chrome-extension-a1b2c3d4e5',
    type: 'normal',
    contexts: ['selection'],
  });
});

chrome.contextMenus.onClicked.addListener(function(item, tab) {
  let url = `https://www.google.com/search?q=site:alltrails.com+${item.selectionText}`;
  chrome.tabs.create({url: url, index: tab.index + 1});
});
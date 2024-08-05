console.log('This is the background page.');
console.log('Put the background scripts here.');

// Toggle to display the side panel
chrome.runtime.onInstalled.addListener(() => {
    chrome.sidePanel.setPanelBehavior({ openPanelOnActionClick: true})
})

// chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
//     const currentTab = tabs[0]
//     console.log(currentTab.url)
// })

// chrome.action.onClicked.addListener((tab) => {
//     chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
//         const currentTab = tabs[0]
//         console.log(currentTab.url)
//     })
// })
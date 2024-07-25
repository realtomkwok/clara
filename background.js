// Allows users to open the side panel by clicking on the action toolbar icon
chrome.sidePanel
    .setPanelBehavior({
        openPanelOnActionClick: true
    })
    .catch((error) => console.log(error))

// // Modify the background script to handle the message and trigger the download
// chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
//     if (request.action === "saveMHTML") {
//         const blob = new Blob([request.data], {type: 'multipart/related'})
//         const url = URL.createObjectURL(blob)
//
//         chrome.downloads.download({
//             url: url,
//             filename: `${request.filename}.mhtml`,
//             saveAs: true
//         }, (downloadId) => {
//             console.log(`Download initiated with ID: ${downloadId}`)
//         })
//     }
// })
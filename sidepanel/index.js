// Capture the MHTML data and send it to the background script
window.addEventListener("load", () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.pageCapture.saveAsMHTML({ tabId: tabs[0].id }, (mhtmlData) => {
            const reader = new FileReader();
            reader.onload = () => {
                const base64Data = reader.result.split(',')[1];
                const filename = tabs[0].title.replace(/\s+/g, '_');
                chrome.runtime.sendMessage({
                    action: "saveMHTML",
                    data: base64Data,
                    filename: filename
                });
            };
            reader.readAsDataURL(mhtmlData);
        });
    });
});

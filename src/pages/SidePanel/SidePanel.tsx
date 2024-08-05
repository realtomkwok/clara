import React from 'react';
import './SidePanel.css';

let url: string | undefined
let title: string | undefined

// Fetch the current tab's information

const SidePanel: React.FC = () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        const currentTab = tabs[0]
        url = currentTab.url
        title = currentTab.title
    })

    return (
        <div className="container">
            <h1>{title}</h1>
            <h2>{url}</h2>
        </div>
    )
}

export default SidePanel
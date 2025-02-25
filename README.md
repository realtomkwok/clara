# Clara

Clara aims to extend the capabilities of screen readers with the help of LLM.

## Plan

### Components

- Chrome Extension (frontend)
    - Browser screen capture: using `chrome.tabCapture` or `chrome.desktopCapture` to capture a video stream of the
      active webpage tab.

## Workflow

```mermaid
sequenceDiagram
    participant User
    participant Site as Website
    participant Client as Clara
    participant AI as AI Service
    User ->> Site: Visits website
    User ->> Client: Activates Clara
    activate Client
    Client ->> User: Request permissions

    alt Permissions granted
        User ->> Client: Grant permissions
        Client --> Site: HTML
        Client --> Site: Transcribed Markdown (for efficiency)
        Client --> Site: Screenshots
        Client ->> AI: Send site data and content
        AI ->> AI: Analyse site structure
        AI ->> AI: Detects site type/content
        AI ->> Client: Returns responses
        Client ->> User: Display/Read responses
    else Permissions denied
        User ->> Client: Denies permissions
        Client ->> User: Shows limited functions
    end
    deactivate Client
```


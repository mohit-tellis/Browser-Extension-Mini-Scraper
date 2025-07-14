document.getElementById("startBtn").addEventListener("click", async () => {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    files: ["content.js"]
  });
});

document.getElementById("clearBtn").addEventListener("click", () => {
  document.getElementById("output").textContent = "Click \"Start Scraping\" to begin...";
});

document.getElementById("copyBtn").addEventListener("click", () => {
  const text = document.getElementById("output").textContent;
  navigator.clipboard.writeText(text).then(() => {
    alert("Copied to clipboard!");
  });
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.type === "SCRAPE_RESULT") {
    document.getElementById("output").textContent = JSON.stringify(request.data, null, 2);
  }
});

# 🧩 Browser-Extension-Mini-Scraper

A lightweight Chrome extension to scrape **titles**, **links**, **images**, and more from any webpage — all with one click.

📌 Perfect for learning DOM parsing, web scraping, and browser extension development.

---

## 🔧 Features

- ✅ Extracts titles, links, images, and pricing (for supported sites)
- ✅ One-click scrape & copy to clipboard
- ✅ Clean popup UI with JSON output
- ✅ Works on sites like [books.toscrape.com](https://books.toscrape.com)
- ✅ Fully client-side (no backend/API)

---

## 📦 Tech Stack

- [Manifest V3](https://developer.chrome.com/docs/extensions/mv3/) (latest)
- JavaScript (popup.js, content.js)
- Chrome Extensions API
- HTML/CSS (popup UI)
- DOM manipulation

---

## 🖥 How It Works

1. **Popup loads UI** when extension icon is clicked  
2. **Injects `content.js`** into active tab  
3. `content.js` scrapes DOM data and sends it back  
4. Results are displayed as JSON and can be copied

---

## 🚀 Getting Started (Dev Mode)

1. Clone this repo:
   git clone https://github.com/mohit-tellis/Browser-Extension-Mini-Scraper.git
   cd Browser-Extension-Mini-Scraper
Open Chrome and go to chrome://extensions

Enable Developer Mode

Click Load Unpacked and select the project folder

Visit a site like https://books.toscrape.com

Click the extension icon ➜ Start Scraping

✨ Sample Output
json
{
  "title": "A Light in the Attic",
  "price": "£51.77",
  "image": "https://books.toscrape.com/media/cache/...jpg",
  "link": "https://books.toscrape.com/catalogue/...html",
  "rating": "Three"
}
📸 Screenshots
<img width="1896" height="947" alt="Screenshot 2025-07-14 215746" src="https://github.com/user-attachments/assets/57293af6-4e51-456b-b1c7-f2f3e82f9090" />



bash
Copy
Edit
📁 /screenshots
📷 popup-ui.png
📷 output-example.png
🧠 Learnings & Improvements
DOM selection with querySelectorAll

Chrome extension architecture

Message passing (content → popup)

JSON handling & clipboard API

👨‍💻 Author
Mohit Raj
📧 mohit@tellistechnologies.com
🔗 GitHub - @mohit-tellis

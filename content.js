(() => {
  const items = document.querySelectorAll('.product_pod'); // customize this for other sites
  const data = Array.from(items).map(book => {
    const title = book.querySelector('h3 a')?.getAttribute('title');
    const price = book.querySelector('.price_color')?.innerText;
    const image = book.querySelector('img')?.getAttribute('src');
    const pageLink = book.querySelector('h3 a')?.getAttribute('href');
    const rating = Array.from(book.classList).find(cls => cls.includes('star-rating')) || 'No rating';
    return {
      title,
      price,
      rating,
      image: image && `https://books.toscrape.com/${image}`,
      link: pageLink && `https://books.toscrape.com/catalogue/${pageLink.replace('../', '')}`
    };
  });

  chrome.runtime.sendMessage({ type: "SCRAPE_RESULT", data });
})();

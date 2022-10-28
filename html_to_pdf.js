const puppeteer = require('puppeteer');


const htmlToPdf = async (url, nameFile) => {

  // Create a browser instance
  const browser = await puppeteer.launch();

  // Create a new page
  const page = await browser.newPage();

  // Open URL in current page
  await page.goto(url, { waitUntil: 'networkidle0' }); 

  //To reflect CSS used for screens instead of print
  await page.emulateMediaType('screen');

// Downlaod the PDF
  const pdf = await page.pdf({
    path: `${nameFile}.pdf`,
    margin: { top: '100px', right: '50px', bottom: '100px', left: '50px' },
    format: 'A3',
  });

  // Close the browser instance
  await browser.close();
}

(async () => {
  htmlToPdf('https://afbayonac.github.io/cv/', 'andres_felipe_bayona_chinchilla_cv')
  htmlToPdf('https://afbayonac.github.io/cv?lang=es', 'andres_felipe_bayona_chinchilla_cv.es')
})();
const puppeteer = require('puppeteer');

(async () => {
  const loop = 300;
  for (let i = 0; i < loop; i++) {
  const browser = await puppeteer.launch({
        args: [
            '--no-sandbox',
            '--disable-setuid-sandbox'
        ]
    });

  const page = await browser.newPage();
  const kanojo = 'https://readmanganato.com/manga-ao977497/';
  const juu = 'https://readmanganato.com/manga-jt986528';
  const mount = 'https://readmanganato.com/manga-lf988940';
   const ishaved = 'https://readmanganato.com/manga-da980509';
  const url = 'https://readmanganato.com/manga-hz985082';
  await page.goto(url,{waitUntil: 'load', timeout: 0});
  await page.waitForTimeout(2000);
  await page.click('.rate_row');
  //await page.screenshot({ path: 'example.png' ,fullPage: true});
  //const name = await page.$eval('.story-info-right > h1 ', element => element.textContent);
  await page.waitForTimeout(1000);
  
  
  await browser.close();
  console.log("Rated " , i , "Times");
  }
})();

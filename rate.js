const puppeteer = require('puppeteer');

(async () => {
  const loop = 10000;
  for (let i = 0; i < loop; i++) {
  const browser = await puppeteer.launch({
        args: [
            '--no-sandbox',
            '--disable-setuid-sandbox'
        ]
    });

  const page = await browser.newPage();

  const url = 'https://readmanganato.com/manga-ao977497/';
  await page.goto(url);
  await page.waitForTimeout(2000);
  await page.click('.rate_star');
  await page.screenshot({ path: 'example.png' ,fullPage: true});
  const name = await page.$eval('.story-info-right > h1 ', element => element.textContent);
  await page.waitForTimeout(1000);
  
  
  await browser.close();
  console.log( name ,"Rated " , i , "Times");
  }
})();

const puppeteer = require('puppeteer');

(async () => {
  const loop = 2000;
  for (let i = 0; i < loop; i++) {
  const browser = await puppeteer.launch({
    args: [
        '--no-sandbox',
        '--disable-setuid-sandbox',
        'user-agent=Mozilla/5.0 (Freebox; Linux i686) AppleWebKit/538.1 (KHTML, like Gecko) Navigateur web/1.0 Version/7.0 Safari/538.1 [ip:83.159.244.129]',
    ]
});

  
  const page = await browser.newPage();
    // 15 people rated
  const url = 'https://toonily.com/webtoon/tonight-youre-my-dinner/';
  await page.goto(url,{waitUntil: 'load', timeout: 0});

  await page.waitForTimeout(2000);
  // 484
  await page.waitForSelector('.ratings_stars');




  await page.click('.ratings_stars');

  await page.waitForTimeout(5000);
 // await page.click('.ratings_stars');
 //await page.screenshot({ path: 'toon.png' ,fullPage: true});
  //const name = await page.$eval('.post-title > h1 ', element => element.textContent);
 // await page.waitForTimeout(1000);
 // await page.screenshot({ path: 'rate.png' ,fullPage: true});

  
  await browser.close();
  console.log("Rated " , i , "Times");
  }
})(); 
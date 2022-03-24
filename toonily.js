const puppeteer = require('puppeteer');

(async () => {
  const loop = 2000;
  for (let i = 0; i < loop; i++) {
  const browser = await puppeteer.launch({
    args: [
        '--no-sandbox',
        '--disable-setuid-sandbox',
        'user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.169 Safari/537.36',
    ]
});

  const page = await browser.newPage();
    // 15 people rated
  const url = 'https://toonily.com/webtoon/tonight-youre-my-dinner/';
  await page.goto(url,{waitUntil: 'load', timeout: 0});
  await page.waitForTimeout(10000);
 // await page.click('.btn-adult-confirm');
 // await page.click('.ratings_stars');
 await page.screenshot({ path: 'example.png' ,fullPage: true});
  //const name = await page.$eval('.post-title > h1 ', element => element.textContent);
  await page.waitForTimeout(1000);
 // await page.screenshot({ path: 'rate.png' ,fullPage: true});

  
  await browser.close();
  console.log("Rated " , i , "Times");
  }
})(); 
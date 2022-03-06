const puppeteer = require('puppeteer');

(async () => {
  const loop = 2000;
  for (let i = 0; i < loop; i++) {
  const browser = await puppeteer.launch({
    args: [
        '--no-sandbox',
        '--disable-setuid-sandbox'
    ]
});

  const page = await browser.newPage();
    // 15 people rated
  const url = 'https://toonily.com/webtoon/tonight-youre-my-dinner/';
  await page.goto(url);
  await page.waitForTimeout(2000);
 // await page.click('.btn-adult-confirm');
  await page.click('.ratings_stars ');
  await page.screenshot({ path: 'example.png' ,fullPage: true});
  //const name = await page.$eval('.post-title > h1 ', element => element.textContent);
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'rate.png' ,fullPage: true});

  
  await browser.close();
  console.log( name ,"Rated " , i , "Times");
  }
})(); 
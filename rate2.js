const puppeteer = require('puppeteer');

(async () => {
  const loop = 2000;
  for (let i = 0; i < loop; i++) {
  const browser = await puppeteer.launch({
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-infobars',
      '--window-position=0,0',
      '--ignore-certifcate-errors',
      '--ignore-certifcate-errors-spki-list',
      '--user-agent=Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36',
    ]
});

  const page = await browser.newPage();
    // 15 people rated
  const url = 'https://manhwa18.cc/webtoon/tonight-you-re-my-dinner';
  await page.goto(url);
  await page.waitForTimeout(2000);
 // await page.click('.btn-adult-confirm');
  //manhwa18 -> .jq-star
  //webtoonxyz -> .ratings_stars
  //manga18 -> "label[for=rate1-star1]"
  await page.click('.jq-star:nth-child(1)');

  //await page.screenshot({ path: 'example.png' ,fullPage: true});
  //const name = await page.$eval('.story-info-right > h1 ', element => element.textContent);
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'rate.png' ,fullPage: true});

  
  await browser.close();
  console.log("Rated " , i , "Times");
  }
})();
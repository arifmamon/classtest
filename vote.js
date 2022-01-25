const puppeteer = require('puppeteer');

(async () => {
  const loop = 500;
  for (let i = 0; i < loop; i++) {
  const browser = await puppeteer.launch({
			defaultViewport: null,
			    

		});

  const page = await browser.newPage();


  await page.goto('https://polls.animecorner.me/vote/yearly/109/',{waitUntil: 'networkidle2'});
  //await page.click('#search-story');
  //await page.type('#search-story', 'Kyouhan');
  //await page.keyboard.press('Enter', { delay: 1000 });
  //await page.keyboard.press('ArrowDown', { delay: 3000 });
  //await page.click('.item-title');
  await page.waitForTimeout(2000);
  
  //const id = await page.$('.col-lg-6' );
		
		//await page.waitForTimeout(3000);
  
  await page.click('.col-lg-6:nth-child(14)');
		await page.select('#user_age', '20');
		await page.waitForTimeout(9000);
		await page.$eval('#poll-submit-btn', el => el.click());
  
  await page.screenshot({ path: 'rate2.png' ,fullPage: true});


  await page.waitForTimeout(2000);
  
  
  await browser.close();
  console.log("done" , i);
  }
})();

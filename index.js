const puppeteer = require('puppeteer');
const PSO2_URL = 'http://pso2.jp/players/boost/';

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(PSO2_URL);
    const emergencies = await page.evaluate(() => [...document.querySelectorAll('.today')].map(e => e.innerText));
    await browser.close();

    const today = moment().set({hour:0,minute:0,second:0,millisecond:0});
    emergencies.map((emergency, index)=> {
        if(!emergency) return;
        const date = today.add(index * 30, 'minutes');
        console.log(date.format('HH:mm'), emergency)
        today.set({hour:0,minute:0,second:0,millisecond:0});
    });
})();
(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://example.com');
  await page.screenshot({path: 'example.png'});

  await browser.close();
})();

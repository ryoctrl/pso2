const puppeteer = require('puppeteer');
const PSO2_URL = 'http://pso2.jp/players/boost/';
const moment = require('moment');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(PSO2_URL);
    const emergencies = await page.evaluate(() => [...document.querySelectorAll('.today')].map(e => e.innerText));
    await browser.close();

    const today = moment().set({hour:0,minute:0,second:0,millisecond:0});
    emergencies.map((emergency, index)=> {
        if(!emergency || index === emergencies.length -1) return;
        if(index === 0) {
            return console.log('本日の緊急一覧');
        }
        const delay = (index - 1) * 30;
        const date = today.add(delay, 'minutes');
        console.log(date.format('HH:mm'), emergency)
        today.set({hour:0,minute:0,second:0,millisecond:0});
    });
})();

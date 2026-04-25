const puppeteer = require('puppeteer');
const path = require('path');

async function generate() {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  
  const filePath = 'file:///' + path.resolve('public/cv-lautaro-ortiz.html').replace(/\\/g, '/');
  await page.goto(filePath, { waitUntil: 'networkidle0' });
  await page.pdf({ 
    path: 'public/cv-lautaro-ortiz.pdf', 
    format: 'A4', 
    printBackground: true,
    margin: { top: '0', right: '0', bottom: '0', left: '0' }
  });
  console.log('✓ CV English PDF generated: cv-lautaro-ortiz.pdf');
  
  await browser.close();
}

generate().catch(err => {
  console.error('Error:', err);
  process.exit(1);
});

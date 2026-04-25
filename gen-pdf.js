const puppeteer = require('puppeteer');
const path = require('path');

async function generate() {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  
  // Generate English version
  const enPath = 'file:///' + path.resolve('public/cv-lautaro-ortiz-en.html').replace(/\\/g, '/');
  await page.goto(enPath, { waitUntil: 'networkidle0' });
  await page.pdf({ 
    path: 'public/cv-lautaro-ortiz.pdf', 
    format: 'A4', 
    printBackground: true,
    margin: { top: '0', right: '0', bottom: '0', left: '0' }
  });
  console.log('✓ CV English PDF generated: cv-lautaro-ortiz.pdf');
  
  // Generate Spanish version
  const esPath = 'file:///' + path.resolve('public/cv-lautaro-ortiz-es.html').replace(/\\/g, '/');
  await page.goto(esPath, { waitUntil: 'networkidle0' });
  await page.pdf({ 
    path: 'public/cv-lautaro-ortiz-es.pdf', 
    format: 'A4', 
    printBackground: true,
    margin: { top: '0', right: '0', bottom: '0', left: '0' }
  });
  console.log('✓ CV Spanish PDF generated: cv-lautaro-ortiz-es.pdf');
  
  await browser.close();
}

generate().catch(err => {
  console.error('Error:', err);
  process.exit(1);
});

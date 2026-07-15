const { chromium } = require('playwright');
const path = require('path');

async function generatePDF(inputFile, outputFile) {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  const inputPath = path.resolve(__dirname, '../public', inputFile);
  const outputPath = path.resolve(__dirname, '../public', outputFile);

  await page.goto('file://' + inputPath, { waitUntil: 'networkidle' });

  await page.pdf({
    path: outputPath,
    format: 'A4',
    printBackground: true,
    margin: { top: '0', right: '0', bottom: '0', left: '0' }
  });

  await browser.close();
  console.log(`Generated: ${outputFile}`);
}

(async () => {
  const variants = [
    ['cv-lautaro-ortiz.html', 'cv-lautaro-ortiz.pdf'],
    ['cv-lautaro-ortiz-es.html', 'cv-lautaro-ortiz-esp.pdf'],
    ['cv-lautaro-ortiz-automation.html', 'cv-lautaro-ortiz-automation.pdf'],
    ['cv-lautaro-ortiz-automation-es.html', 'cv-lautaro-ortiz-automation-es.pdf'],
    ['cv-lautaro-ortiz-data.html', 'cv-lautaro-ortiz-data.pdf'],
    ['cv-lautaro-ortiz-data-es.html', 'cv-lautaro-ortiz-data-es.pdf'],
  ];

  try {
    for (const [inputFile, outputFile] of variants) {
      await generatePDF(inputFile, outputFile);
    }
    console.log('All CV variants generated successfully');
  } catch (err) {
    console.error('Error:', err.message);
    process.exit(1);
  }
})();

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
  console.log(`✓ Generated: ${outputFile}`);
}

(async () => {
  try {
    await generatePDF('cv-lautaro-ortiz-en.html', 'cv-lautaro-ortiz.pdf');
    await generatePDF('cv-lautaro-ortiz-es.html', 'cv-lautaro-ortiz-es.pdf');
    console.log('✓ Both CVs generated successfully');
  } catch (err) {
    console.error('Error:', err.message);
    process.exit(1);
  }
})();

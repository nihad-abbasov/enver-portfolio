const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const sizes = [192, 512];

async function generateIcons() {
  try {
    // Ensure public directory exists
    if (!fs.existsSync('public')) {
      fs.mkdirSync('public');
    }

    // Read the logo
    const logoBuffer = await sharp('public/logo.png')
      .resize(512, 512, {
        fit: 'contain',
        background: { r: 255, g: 255, b: 255, alpha: 1 }
      })
      .toBuffer();

    // Generate icons for each size
    for (const size of sizes) {
      await sharp(logoBuffer)
        .resize(size, size)
        .toFile(`public/icon-${size}x${size}.png`);
      
      console.log(`Generated icon-${size}x${size}.png`);
    }

    console.log('All icons generated successfully!');
  } catch (error) {
    console.error('Error generating icons:', error);
  }
}

generateIcons(); 
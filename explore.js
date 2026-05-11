const os = require('node:os');
const path = require('node:path');
const fs = require('node:fs');

console.log('=== NODE.JS BUILT-IN MODULES EXPLORATION ===\n');

//OS MODULE
console.log('--- OS MODULE ---');
console.log('Platform:', os.platform());
console.log('CPU Cores:', os.cpus().length);

const totalMemory = (os.totalmem() / (1024 ** 3)).toFixed(2);
console.log('Total Memory:', totalMemory, 'GB');

const freeMemory = (os.freemem() / (1024 ** 3)).toFixed(2);
console.log('Free Memory:', freeMemory, 'GB');
console.log();

// PATH MODULE
console.log('--- PATH MODULE ---');
console.log('__dirname:', __dirname);
console.log('__filename:', __filename);

const productPath = path.join(__dirname, 'data', 'products.json');
console.log('path.join() result:', productPath);

const fileExtension = path.extname('profile-photo.jpg');
console.log('File extension:', fileExtension);
console.log();

// FS MODULE
console.log('--- FS MODULE ---');

// Step 1: Creating activity.log
const logContent = `Name: Samekito\nDate: ${new Date().toLocaleDateString()}\nNode.js exploration complete`;

fs.writeFile('activity.log', logContent, (err) => {
  if (err) {
    console.error('Error creating file:', err.message);
    return;
  }
  console.log('✓ Created activity.log');

  // Step 2: Reading activity.log (non-blocking with callback)
  fs.readFile('activity.log', 'utf-8', (err, data) => {
    if (err) {
      console.error('Error reading file:', err.message);
      return;
    }
    console.log('✓ Read activity.log:');
    console.log(data);
    console.log();

    // Step 3: Appending a second line
    const appendContent = '\nBuilt-in modules: fs, path, os explored';
    fs.appendFile('activity.log', appendContent, (err) => {
      if (err) {
        console.error('Error appending to file:', err.message);
        return;
      }
      console.log('✓ Appended second line to activity.log');

      // Reading the updated file to show final result
      fs.readFile('activity.log', 'utf-8', (err, data) => {
        if (err) {
          console.error('Error reading updated file:', err.message);
          return;
        }
        console.log('✓ Final activity.log content:');
        console.log(data);
        console.log();
        console.log('=== EXPLORATION COMPLETE ===');
      });
    });
  });
});

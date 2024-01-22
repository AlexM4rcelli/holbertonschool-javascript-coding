const fs = require('fs');

const filePath = process.argv[2];
const fileContent = process.argv[3];

fs.writeFile(filePath, 'utf-8', fileContent, (err) => {
  if (err) throw err;
});

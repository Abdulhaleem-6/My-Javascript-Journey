const fs = require('fs');
const path = require('path');
const render = require('./render');

const forbiddenDirs = ['node_modules'];

class Runner {
  constructor() {
    this.testFiles = [];
  }

  async runTests() {
    for (let file of this.testFiles) {
      console.log('\x1b[90m---- ' + file.shortName + '\x1b[0m');
      const beforeEaches = [];
      
      global.render = render;

      global.beforeEach = (fn) => {
        beforeEaches.push(fn);
      };
      
      global.it = async (desc, fn) => {
        beforeEaches.forEach(func => func());
        try {
          await fn();
          console.log('\t\x1b[32mOK ---', desc, '\x1b[0m');
        } catch (err) {
          const message = err.message.replace(/\n/g, '\n\t\t')
          console.log(`\t\x1b[31mX --- ${desc}\x1b[0m`);
          console.log('\t\x1b[31m', message, '\x1b[0m');
        }
      };
      try {
        require(file.name);
      } catch (err) {
        console.log('\x1b[31mX --- Error loading file', file.name, '\x1b[0m');
        console.log('\x1b[31m', err, '\x1b[0m');
      }

    }
  }

  async collectFiles(targetPath) {
    const files = await fs.promises.readdir(targetPath);

    for (let file of files) {
      const filepath = path.join(targetPath, file);
      const stats = await fs.promises.lstat(filepath);

      if (stats.isFile() && file.includes('.test.js')) {
        this.testFiles.push({ name: filepath, shortName: file });
      } 
      else if (stats.isDirectory() && !forbiddenDirs.includes(file)) {
        const childFiles = await fs.promises.readdir(filepath);
        files.push(...childFiles.map(f => path.join(file, f)));
      };
    };
  };
}

module.exports = Runner;
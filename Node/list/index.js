#!/usr/bin/env node
// const chalk = require('chalk');
const fs = require('fs');
// import fs from 'fs';
const util = require('util');
// import util from 'util';
const path = require('path');

// Method #2
// const lstat = util.promisify(fs.lstat);

// Method #3
const { lstat } = fs.promises;

const targetDir = process.argv[2] || process.cwd();

fs.readdir(targetDir, async (err, filenames) => {
  // EITHER
  // err === an error object, which means something went wrong.
  // OR
  // err === null, which means everything is working fine.
  if (err) {
    // error handling code here
    console.log(err);
  }

  // for (let filename of filenames) {
  //   try {
  //     const stats = await lstat(filename);

  //     console.log(filename, stats.isFile());
  //   }catch(err) {
  //     console.log(err)
  //   }
  // }
  // BAD CODE HERE!!
  // for (let filename of filenames) {
  //   fs.lstat(filename, (err, stats) => {
  //     if (err) {
  //       console.log(err);
  //     }
  //     console.log(filename, stats.isFile());
  //   })
  // }
  // BAD CODE COMPLETE.

  // NOT PROPER BUT BETTER CODE[Option #1]:
  // const allStats = Array(filenames.length).fill(null);
  // for (let filename of filenames) {
  //   const index = filenames.indexOf(filename); 
  //   fs.lstat(filename, (err, stats) => {
  //     if (err) {
  //       console.log(err);
  //     }
  //    allStats[index] = stats;

  //    const ready = allStats.every((stats) => {
  //     return stats;
  //    })
  //    if (ready) {
  //     allStats.forEach((stats, index) => {
  //       console.log(filenames[index], stats.isFile())
  //     })
  //    }
  //   })
  // }
  // SEMI PROPER CODE COMPLETE.

  // PROPER CODE:
  const statPromises = filenames.map(filename => {
    return lstat(path.join(targetDir, filename));
  });
  const allStats = await Promise.all(statPromises);

  for (let stats of allStats) {
    const index = allStats.indexOf(stats);

    if (stats.isFile()) {
      console.log('\x1b[32m' + filenames[index] + '\x1b[0m'); // Green color for files
    } else {
      console.log('\x1b[31m' + filenames[index] + '\x1b[0m'); // Red color for directories
    }
  }
  // C'EST FINI.
});

// Option #2 (Make the lstat a promise.):
// const lstat = (filename) => {
//   return new Promise((resolve, reject) => {
//     fs.lstat(filename, (err, stats) => {
//       if(err) {
//         reject(err);
//       }
//       resolve(stats);
//     })
//   })
// };

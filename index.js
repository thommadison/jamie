#!/usr/bin/env node   
//above code only works on mac

const pkgJSON = require('./package.json');
const welcome = require('cli-welcome');

welcome({
    title: pkgJSON.name,
    tagLine: `Hey there`,
    description: pkgJSON.description,
    version: pkgJSON.version,
    bgColor: `#FADC00`,
    color: `#000000`,
    bold: true,
    clear: true,
})

// console.log(`
// Name:  ${pkgJSON.name} 
// Version:  ${pkgJSON.version}
// Description: ${pkgJSON.description}
// `);


console.log('Jamie Thompson https://github.com/thommadison');
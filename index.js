#!/usr/bin/env node   
//above code only works on mac

import logSymbols from 'log-symbols';

import { createRequire } from "module";
const require = createRequire(import.meta.url);

const pkgJSON = require('./package.json');

const welcome = require('cli-welcome');

const chalk = require('chalk');


//Alerts
const success = chalk.green.inverse;
const warning = chalk.keyword('orange').inverse;
const info = chalk.blue.inverse;
const error = chalk.red.inverse;

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


// console.log('Jamie Thompson https://github.com/thommadison');
console.log(chalk.dim('Jamie Thompson ') + chalk.magenta('https://github.com/thommadison'));


console.log(`
${logSymbols.success} ${success(' SUCCESS ')}: Thanks for checking out my CLI.

${logSymbols.info} ${info(' INFO ')}: I am making a CLI.

${logSymbols.warning} ${warning(' WARNING ')}: PLease don't copy me.

${logSymbols.error} ${error(' ERROR ')}: I am on vacation. Contact me next week.
`);


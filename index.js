#!/usr/bin/env node
'use strict'

const program = require('commander');
const fs = require('fs-extra');

const getSrcDir = dir => {
  let srcDir = `${dir}/src`;

  dir.split('/').forEach((dirItem, index) => {
    if(dirItem === 'src')
      srcDir = dir.split('/').slice(0, index).join('/') + '/src';
  });

  return srcDir;
};

const getHeadUpper = str => str.slice(0, 1).toUpperCase() + str.slice(1);

module.exports = () => {
  program
    .usage('<component_name>')
    .version(require(`${__dirname}/package.json`).version, '-v, --version')
    .parse(process.argv);
  const srcDir = getSrcDir(process.cwd());

  const name = program.args[0];
  if(!name){
    console.log('<component_name> is required\n');
    console.log(program.help());
    process.exit();
  }
  const XXX = getHeadUpper(name);

  Promise.resolve()
    .then(() => fs.readFile(`${__dirname}/minimum/minimumComponent.tsx`, 'utf8'))
    .then(data => {
      const replacedData = data.replace(/XXX/g, XXX);
      return fs.outputFile(`${srcDir}/components/${XXX}.tsx`, replacedData);
    })
    .then(() => fs.readFile(`${__dirname}/minimum/minimumContainer.ts`, 'utf8'))
    .then(data => {
      const replacedData = data.replace(/XXX/g, XXX);
      return fs.outputFile(`${srcDir}/containers/${XXX}.ts`, replacedData);
    })
    .catch(err => {
      console.log('Fail!');
      console.error(err)
    });
}

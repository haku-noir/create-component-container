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

module.exports = (name) => {
  const srcDir = getSrcDir(process.cwd());

  if(!name){
    console.log('<component_name> is required\n');
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

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

module.exports = (name, minimum) => {
  const srcDir = getSrcDir(process.cwd());

  if(!name){
    console.log('<component_name> is required\n');
    process.exit();
  }
  const XXX = getHeadUpper(name);

  Promise.resolve()
    .then(() => (
      minimum ?
      fs.readFile(`${__dirname}/minimum/minimumComponent.tsx`, 'utf8') :
      fs.readFile(`${__dirname}/hooks/hooksComponent.tsx`, 'utf8')
    ))
    .then(data => {
      const replacedData = data.replace(/XXX/g, XXX);
      return fs.outputFile(`${srcDir}/components/${XXX}.tsx`, replacedData);
    })
    .then(() => (
      minimum ?
        null :
        fs.readFile(`${__dirname}/hooks/hooksContainer.tsx`, 'utf8')
    ))
    .then(data => {
      if(!data) return null;
      const replacedData = data.replace(/XXX/g, XXX);
      return fs.outputFile(`${srcDir}/containers/${XXX}CTR.tsx`, replacedData);
    })
    .catch(err => {
      console.log('Fail!');
      console.error(err)
    });
}

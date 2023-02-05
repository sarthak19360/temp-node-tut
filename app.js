// to install a local dependency(which canbe used in this project)
// npm i <packageName>

// to install a global dependency (which can be used in all projects)
// npm i -g <packageName>

// package.json - manifest file(stores important info about project/package)
// manual approcah -create package.json in the root,create properties etc
// npm init (step by step approach,press enter to skip)
// npm init -y (everything default)

const _ = require('lodash');

const items = [1,[2,[3,[4]]]];

const newItems = _.flattenDeep(items);
console.log(newItems);
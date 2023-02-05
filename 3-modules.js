// Modules - encapsulated code(only share what is required)
// node uses CommonJS library, every file is module by default

const names = require("./4-names");
// const {john,peter} = require("./4-names");
const sayHi = require("./5-utils");

// console.log(names);
sayHi('susan')
// sayHi(john)  - wrong
// sayHi(peter) - wrong
sayHi(names.john)
sayHi(names.peter)
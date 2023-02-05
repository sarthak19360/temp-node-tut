
const os = require('os');
// const os = require('node:os');

// info about curent user
const user = os.userInfo();
console.log(user);

// method that returns uptie of the system
console.log(`the uptime of the system is ${os.uptime()} seconds`);

const currentOS = {
    name : os.type(),
    release : os.release(),
    totalmem : os.totalmem(),
    freemem : os.freemem(),
}
console.log(currentOS);
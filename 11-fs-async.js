const {readFile,writeFile} = require('fs')

console.log('start');
readFile('./content/first.txt','utf8',(err,result) => {
    if(err) {
        console.log(err);
        return;
    }
    const first = result;
    readFile('./content/second.txt','utf8',(err,result)=> {
        if(err) {
            console.log(err);
            return;
        }
        const second = result;
        writeFile(
            './content/result-async.txt',
            `Here is the result : ${first}, ${second}`,
            (err,result) => {
                if(err) {
                    console.log(err);
                    return;
                }
                console.log('done with the task');
            }
        )
    })
})
console.log('starting the next task');

// as soon as a user starts a task in async mode, 
// NODE offloads the task so that it is ready for another user's use
// In this way,the program takes lesser time to execute
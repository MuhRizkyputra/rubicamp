const readline = require('node:readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: 'tulis kalimatmu disini> ',
});

rl.prompt();

rl.on('line', (line) => {
    let arrSent = line.split(" ");
    let arrNew = [];

    for (let i = 0; i < arrSent.length; i++) {
        if (arrSent[i].charAt(0).match(/[aiueoAIUEO]/)) {
            arrNew.push(arrSent[i]);
        } else {
            arrNew.push(arrSent[i].slice(1).concat(arrSent[i].charAt(0)).concat('nyo'));
        }
    }
    console.log(arrNew.join(' '));
    rl.prompt();
}).on('close', () => {
    console.log('Good Bye!');
    process.exit(0);
});
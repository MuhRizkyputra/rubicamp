if (!process.argv[2]) {
    console.log('tolong sertakan nama file sebagai inputan soalnya\n')
    console.log('misalkan: node tebakan.js data.json')
    process.exit(1);
}
const fs = require("node:fs");

let data = fs.readFileSync(process.argv[2], "utf-8")
const reference = JSON.parse(data);
//console.log(data);

const readline = require("node:readline")
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: 'Tebakan: ',
})

reference.push({ 'definition': 'sebutkan kota yang memiliki julukan Kota Intan?', 'term': 'garut' });

console.log('\nSelamat datang di permainan Tebak Kata, kamu akan di berikan pertanyaan dari file ini "data.JSON"\n')
console.log('Untuk bermain, jawablah dengan jawaban yang sesuai\n')
console.log('Gunakan "skip" untuk menangguhkan pertanyaannya, dan di akhir pertanyaaan akan ditanyakan lagi.\n')

let wadahJason = 0
let kesalahan = 1
console.log(`\npertanyaan: ${reference[wadahJason].definition}`);

rl.prompt();

rl.on('line', (line) => {
    if (line.toString().toLowerCase() == 'skip') {
        reference.push(reference[wadahJason])
        reference.splice(wadahJason, 1)
    }

    else if (line.toString().toLowerCase() == reference[wadahJason].term.toLowerCase()) {
        console.log('Anda beruntung!\n');
        wadahJason++
        kesalahan = 1
    }
    else {
        console.log(`Anda Kurang Beruntung! anda telah salah ${kesalahan} kali, silahkan coba lagi.\n`);
        kesalahan++
    };
    if (wadahJason == reference.length) {
        rl.close();
    }
    console.log(`\npertanyaan: ${reference[wadahJason].definition}`);
    rl.prompt();
}).on('close', () => {
    console.log('Anda Menang!\n')
    process.exit(0);
});
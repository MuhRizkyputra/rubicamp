const fs = require("node:fs");  // ES5

let data = fs.readFileSync("data.json", "utf-8")    // memanggil data jason dan mengubah dari hex ke alfabet
const reference = JSON.parse(data);     // merubah string menjadi objek
console.log(data);

const readline = require("node:readline")
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: 'Tebakan: ',
})

reference.push({ 'definition': 'sebutkan kota yang memiliki julukan Kota Intan?', 'term': 'garut' });

console.log('Selamat datang di permainan Tebak Kata, kamu akan di berikan pertanyaan dari file ini "data.JSON"')
console.log('Untuk bermain, jawablah dengan jawaban yang sesuai')
console.log('Gunakan "skip" untuk menangguhkan pertanyaannya, dan di akhir pertanyaaan akan ditanyakan lagi.')

let wadahJason = 0
let kesalahan = 1
console.log(`pertanyaan: ${reference[wadahJason].definition}`);

rl.prompt();

rl.on('line', (line) => {
    if (line.toString().toLowerCase() == 'skip') {
        reference.push(reference[wadahJason])
        wadahJason++
    
    }

    else if (line.toString().toLowerCase() == reference[wadahJason].term.toLowerCase()) {
        console.log('Anda beruntung!\n');
        wadahJason++
        kesalahan = 1
    }
    else {
        console.log(`Anda Kurang Beruntung! anda telah salah ${kesalahan} kali, silahkan coba lagi.`);
        kesalahan++
    };
    if (wadahJason == reference.length) {
        rl.close();
    }
    console.log(`pertanyaan: ${reference[wadahJason].definition}`);
    rl.prompt();
}).on('close', () => {
    console.log('Anda Menang!')
    process.exit(0);
});
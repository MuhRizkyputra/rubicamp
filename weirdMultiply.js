//weirdMultiply

function weirdMultiply(sentence) {
    var numb = sentence.toString()  // merubah angka menjadi string 
    if (numb.length > 1) {
        let hasil = 1
        for (let i = 0; i < numb.length; i++) {
            hasil *= numb[i];  // hasil = hasil * numb[i];

        }
        return weirdMultiply(hasil);
    } else {
        return sentence;
    }
}
console.log(weirdMultiply(39));
console.log(weirdMultiply(999));
console.log(weirdMultiply(3));
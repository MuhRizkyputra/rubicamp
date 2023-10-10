function romawi(n){

    const tableRomawi = [{awal: 1000 , akhir:'M'},{awal: 900 , akhir:'CM'},{awal: 500 , akhir:'D'},{awal: 400 , akhir:'CD'},{awal: 100 , akhir:'C'},
    {awal: 90 , akhir:'XC'},{awal: 50 , akhir:'L'},{awal: 40 , akhir:'XL'},{awal: 10 , akhir:'X'},{awal: 5 , akhir:'V'}, {awal: 4 , akhir:'IV'},
    {awal: 1 , akhir:'I'}]

    let hasil ='';
    for (let i = 0; i < tableRomawi.length; i++) {
        while (n >= tableRomawi[i].awal) {
            hasil += tableRomawi[i].akhir;
            n -= tableRomawi[i].awal;
            
        }
    } return hasil;

    }


console.log('Script Testing untuk Konversi Romawi\n');
console.log('input | expected | result');
console.log('------|----------|-------');
console.log('4      |IV         |', romawi(4));
console.log('9      |IX         |', romawi(9));
console.log('13     |XIII       |', romawi(13));
console.log('1453   |MCDLIII    |', romawi(1453));
console.log('16456  |MCDLIII    |', romawi(1646));
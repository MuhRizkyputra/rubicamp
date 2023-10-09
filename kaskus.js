function deretKaskus(n) {

    let array = []
    for (let i = 1; i <= n; i++) {    // nilai i = 1 dan i tidak sama n dan i nilainya akan selalu bertambah // (let i = 1 artinya nilai index muali dari 1 )
        if ((i * 3) % 5 === 0 && (i * 3) % 6=== 0) { // jika nilai i dikali 3 dibagi 5 hasilnya 0 dan (&&) nilai i dikali 3 di bagi 6 hasilnya 0 maka "KASKUS"
            array.push('KASKUS')
        } else if ((i * 3) % 6 === 0) {  // jika nilai i dikali 3 dibagi 6 hasil 0 maka keluar "KAS"
            array.push('KAS')
        } else if ((i * 3) % 5 === 0) {
            array.push('KUS')  // jika nilai i di kali 3 dibagi 6 hasil 0 maka keluar "KUS"
        } else {
            array.push((i * 3)); // jika semua parameter diatas tidak terpenuhin maka akan ada pengulangan
        }
    }   return array;

}


console.log(deretKaskus(10));

/*
for(let j = 2; j <=5 ; j++){
    console.log(j)
}*/
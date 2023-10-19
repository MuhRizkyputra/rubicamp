//indexPrime
function indexPrime(param1) { 

   let result = [];              // penampung
   let prima = 2;                // penampung bilangan prima dimulai dari angka 2

   while (result.length < param1) {      // apabila panjang let result kurang dari param1 , maka hasilnya betul
      let confirm = true;

      for (let i = 2; i <= Math.sqrt(prima); i++) { // apabila panjang  i = 2 , i <= (math.sqrt => object math javascript yang berfungsi untuk mengembalikan nilai akar kuadrat dari x ; i akan ada penambahan )
         if (prima % i === 0) { // apabila bilangan prima dibagi i = 0 maka itu bukan bilangan prima
            confirm = false;
         }
      }
      if (confirm)  // kondisi
      {
         result.push(prima); // perintah untuk mendorong bilangan prima
      }
      prima++; // penambahan bilangan prima 
   }
   return result[result.length - 1]; // proses mengulang dari panjangnya result - 1

}

console.log(indexPrime(4));
console.log(indexPrime(500));
console.log(indexPrime(37786));

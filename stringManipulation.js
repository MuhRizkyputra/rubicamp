function stringManipulation(word) {

   if (word[0].match(/^[aiueo]/i)) {
      console.log(word);
   } else {
      let newWord = word.slice(1, word.length).concat(word[0]).concat('nyo');
      console.log(newWord);
   }
}


stringManipulation('ayam');
stringManipulation('bebek');

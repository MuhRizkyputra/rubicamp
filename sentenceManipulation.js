function sentenceManipulation(sentence) {
    let arrSent = sentence.split(" ");
    let arrNew = [];

    for (let i = 0; i < arrSent.length; i++) {
        if (arrSent[i].charAt(0).match(/[aiueoAIUEO]/)) {
            arrNew.push(arrSent[i]);
        } else {
            arrNew.push(arrSent[i].slice(1).concat(arrSent[i].charAt(0)).concat('nyo'));
        }
    }
    console.log(arrNew.join(' '));
}
sentenceManipulation('ibu pergi ke pasar bersama aku');
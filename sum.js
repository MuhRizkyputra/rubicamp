function sum() {
    let tabSum = 0 // kenapa pakai 0 supaya ke timpa , apabila pakai const tidak ke timpa ( let penampung)
    for (let i = 0; i < arguments.length; i++){ // array selalu di mulai angka 0
        tabSum = tabSum + arguments[i]
    }
    console.log(tabSum)

}

sum(1, 2, 7);
sum(1, 4);
sum(11);
sum(10, 3, 6, 7, 9); 
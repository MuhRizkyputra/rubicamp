const fs = require("fs")
const datanya = JSON.parse(fs.readFileSync('toDo.json', 'utf-8'))
const command = process.argv[2]
const inputId = process.argv[3]
const inputTugas = process.argv.slice(3).join(' ')
const tagging = process.argv.slice(4)

if (!command || command == 'help') {
    tolong()
} else if (command == "list") {
    daftarKerjaan()
} else if (command == "task") {
    daftarTugas(inputId)
} else if (command == "add") {
    tambahTugas(inputTugas)
} else if (command == "complete") {
    selesai(inputId)
} else if (command == "uncomplete") {
    batalSelesai(inputId)
} else if (command == "delete") {
    hapus(inputId)
} else if (command == 'list:outstanding') {
    belumBeres(inputId)
} else if (command == 'list:completed') {
    daftarBeres(inputId)
} else if (command == 'tag') {
    tambahTag(tagging)
} else if (`filter:${(command.slice(7))}`) {
    tambahFilter(inputId)
}


function daftarKerjaan() {

    if (datanya.length === 0) {
        console.log('Daftar Kerjaan Kosong.');
    } else {
        console.log('Daftar Pekerjaan');
        datanya.forEach((data, index) => {
            console.log(` ${index + 1}. [${data.complete ? 'x' : ' '}] ${data.namaTugas}`);
        });
    }
}

function daftarTugas() {
    for (let i in datanya[inputId - 1]) console.log(`${i}: ${datanya[inputId - 1][i]}`)
}

function tambahTugas(tugas) {

    const dataBaru = {
        id: datanya.length + 1,
        namaTugas: tugas,
        complete: false,
        tags: []
    }

    datanya.push(dataBaru)
    fs.writeFileSync("toDo.json", JSON.stringify(datanya), 'utf-8');
    console.log(`"${tugas}"telah di tambahkan`)
}

function hapus(id) {
    if (id > datanya.length) {
        console.log('data hanya sampai ke- ', datanya.length)
        return;
    }
    const tugasDihapus = datanya.splice(id - 1, 1)[0]
    console.log(` ${tugasDihapus.namaTugas}" telah dihapus dari daftar`)

    datanya.forEach((item, index) => {
        item.id = index + 1;
    })
    fs.writeFileSync("toDo.json", JSON.stringify(datanya), 'utf8')
}

function selesai(id) {
    datanya.forEach(item => {
        if (item.id == id) {
            item.complete = true
            console.log(` "${item.namaTugas}" telah selesai`)
        }
    })
    fs.writeFileSync("toDo.json", JSON.stringify(datanya), 'utf-8')
}

function batalSelesai(id) {
    datanya.forEach(item => {
        if (item.id == id) {
            item.complete = false
            console.log(` "${item.namaTugas}" status selesai di batalkan`)
        }
    })
    fs.writeFileSync("toDo.json", JSON.stringify(datanya), 'utf-8')
}

function belumBeres(id) {
    console.log("daftar kerjaan");
    let wadah = []
    for (let i of datanya) {
        if (!i.complete) {
            i.complete = "[ ]";
            wadah.push(`${i.id}: ${i.complete} ${i.namaTugas}`)

        }
    }
    if (id == "asc") console.log(wadah.join("\n"));
    else if (id == "desc") console.log(wadah.reverse().join("\n"));
}

function daftarBeres(id) {
    console.log("daftar kerjaan");
    let wadah = []
    for (let i of datanya) {
        if (i.complete) {
            i.complete = "[X]";
            wadah.push(`${i.id}: ${i.complete} ${i.namaTugas}`)

        }
    }
    if (id == "asc") console.log(wadah.join("\n"));
    else if (id == "desc") console.log(wadah.reverse().join("\n"));
}

function tambahTag(tagar) {
    console.log(
        `Tag ${tagar} telah ditambahkan ke dalam daftar '${datanya[datanya.findIndex((i) => i.id == inputId)].namaTugas
        }'`
    );
    datanya[inputId - 1].tags = process.argv.slice(4);
    fs.writeFileSync("toDo.json", JSON.stringify(datanya), "utf-8");
}

function tambahFilter() {
    console.log("Daftar Pekerjaan");
    for (let i of datanya) {
        if (i.tags.includes(command.slice(7))) {
            if (i.complete) {
                i.complete = "[x]";
                console.log(`${i.id}: ${i.complete} ${i.namaTugas}`);
            } else if (!i.complete) {
                i.complete = "[ ]";
                console.log(`${i.id}: ${i.complete} ${i.namaTugas}`);
            }
        }
    }
}

function tolong() {
    console.log(`>>> JS TODO <<<
    node c13.js <command>
    node c13.js list
    node c13.js task <task_id>
    node c13.js add <task_conten>
    node c13.js delete <task_id>
    node c13.js complete <task_id>
    node c13.js uncomplete <task_id>
    node c13.js list:outstanding asc|desc
    node c13.js list:completed asc|desc
    node c13.js tag <task_id> <tag_name_1> <tag_name_2> ... <tag_name_N>
    node c13.js filter:<tag_name`)
}



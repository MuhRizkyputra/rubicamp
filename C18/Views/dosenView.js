import Table from "cli-table"

export function showDosen (dosen =  []) {

    var table = new Table ({
        head: ['NIP', 'Nama Dosen'],
        colWidths: [10, 15]
    })

    dosen.forEach((item, index) => {
       table.push([item.nip, item.nama_dosen]) 
    })
    console.log(table.toString())
     
    }
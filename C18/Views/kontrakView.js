import Table from "cli-table"

export function showKontrak ( kontrak = []) {

    var table = new Table({
        head : ['ID', 'NIM', 'NAMA', 'MATA KULIAH', 'DOSEN', 'NILAI'],
        colWidths : [10, 10, 30, 30, 30 , 10 ]
    })
// console.log(kontrak)
    kontrak.forEach((item)=> {
        table.push([item.id_kontrak, item.nim, item.nama , item.nama_matkul, item.nama_dosen , item.nilai ? item.nilai : ""])
    })
    console.log(table.toString())
}
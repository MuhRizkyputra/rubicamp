import Table from "cli-table"
import { line } from "../c18.js"


export function option() {
    line()

    console.log(`
    Silahkan pilih opsi dibawah ini:
    [1] Daftar Kontrak
    [2] Cari Kontrak
    [3] Tambah Kontrak
    [4] Hapus Kontrak
    [5] Update Nilai
    [6] Kembali`)

    line()
}

export function showKontrak(kontrak = []) {

    var table = new Table({
        head: ['ID', 'NIM', 'NAMA', 'MATA KULIAH', 'DOSEN', 'NILAI'],
        colWidths: [10, 10, 30, 30, 30, 10]
    })
    //console.log(kontrak)
    kontrak.forEach((item) => {
        table.push([item.id_kontrak, item.nim, item.nama, item.nama_matkul, item.nama_dosen, item.nilai ? item.nilai : ""])
    })
    console.log(table.toString())
}

export function findReslt(array) {
        let table = new Table({
        head: ["ID", "NAMA" , "Mata Kuliah", "Dosen", "Nilai"]
    })
    array.forEach(item => {
        table.push([item.id_kontrak, item.nama, item.mata_kuliah, item.dosen, item.nilai ? item.nilai : ''])

});
    console.log(table.toString())
}

export function findMatakul(array) {
        let table = new Table({
        head: ["ID", "Mata Kuliah", "Nilai"]
    })
    array.forEach(item => {
        table.push([item.id_kontrak, item.mata_kuliah, item.nilai ? item.nilai : ''])

    });
    console.log(table.toString())
}
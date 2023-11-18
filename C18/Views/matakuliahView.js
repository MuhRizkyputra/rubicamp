import Table from "cli-table"
import { line } from "../c18.js"

export function option() {
    line()

    console.log(`
    Silahkan pilih opsi dibawah ini:
    [1] Daftar Mata Kuliah
    [2] Cari Mata Kuliah
    [3] Tambah Mata Kuliah
    [4] Hapus Mata Kuliah
    [5] Kembali`)

    line()
}

export function showMatakuliah(mata_kuliah = []) {

    var table = new Table({
        head: ['Id Mata Kuliah', 'Nama Mata Kuliah', 'SKS'],
        colWidths: [10, 25, 10]
    })
    mata_kuliah.forEach((item, index) => {
        table.push([item.id_matkul, item.nama_matkul, item.sks])
    })
    console.log(table.toString())
}

export function findResl(data) {
    console.log(`Detail Mata Kuliah dengan Kode Mata Kuliah') : '${data.id_matkul}'
    Kode Mata Kuliah       : ${data.id_matkul}
    Nama Mata Kuliah       : ${data.nama_matkul}
    SKS                    : ${data.sks}
    `)
}
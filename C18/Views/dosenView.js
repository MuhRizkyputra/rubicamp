import Table from "cli-table"
import { line } from "../c18.js"

export function option() {
    line()

    console.log(`
    Silahkan pilih opsi dibawah ini:
    [1] Daftar Dosen
    [2] Cari Dosen
    [3] Tambah Dosen
    [4] Hapus Dosen
    [5] Kembali`)

    line()
}

export function showDosen(dosen = []) {

    var table = new Table({
        head: ['NIP', 'Nama Dosen'],
        colWidths: [10, 15]
    })

    dosen.forEach((item, index) => {
        table.push([item.nip, item.nama_dosen])
    })
    console.log(table.toString())
}

export function findResult(data) {
    console.log(`Detail Dosen dengan Kode NIP : '${data.nip}'
    NIP           : ${data.nip}
    Nama Dosen    : ${data.nama_dosen}
    `)
}
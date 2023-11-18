import Table from "cli-table"
import { line } from "../c18.js"

export function option() {
    line()

    console.log(`
    Silahkan pilih opsi dibawah ini:
    [1] Daftar Jurusan
    [2] Cari Jurusan
    [3] Tambah Jurusan
    [4] Hapus Jurusan
    [5] Kembali `)

    line()
}

export function showJurusan(jurusan = []) {

    var table = new Table({
        head: ['Id Jurusan', 'Nama Jurusan'],
        colWidths: [17, 23]
    })
    jurusan.forEach((item, index) => {
        table.push([item.id_jurusan, item.nama_jurusan])
    })
    console.log(table.toString())
}

export function findHasil(data) {
    console.log(`Detail Jurusan dengan Kode Jurusan : '${data.id_jurusan}'
    Kode Jurusan       : ${data.id_jurusan}
    Nama Jurusan       : ${data.nama_jurusan}
    `)
}
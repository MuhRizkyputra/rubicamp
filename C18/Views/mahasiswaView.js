import Table from "cli-table"
import { line } from "../c18.js"


export function option() {
    line()

    console.log(`
    Silahkan pilih opsi dibawah ini:
    [1] Daftar Mahasiswa
    [2] Cari Mahasiswa
    [3] Tambah Mahasiswa
    [4] Hapus Mahasiswa
    [5] Kembali`)

    line()
}

export function showMahasiswa (mahasiswa = []){
    var table = new Table({
        head : ['NIM', 'NAMA', 'TANGGAL LAHIR', 'ALAMAT', ' ID JURUSAN', 'NAMA JURUSAN'],
        colWidths : [10 , 20 , 15 , 20 , 15 , 20]
    })
    mahasiswa.forEach((item, index) => {
        table.push([item.nim, item.nama, item.tanggal_lahir, item.alamat, item.id_jurusan, item.nama_jurusan])
    })
    console.log(table.toString())
}

export function findRes(data) {
    console.log(`'Detail Mahasiswa dengan Kode NIM : '${data.nim}'
    NIM             : ${data.nim}
    Nama            : ${data.nama}
    Tanggal Lahir   : ${data.tanggal_lahir}
    Alamat          : ${data.alamat}
    ID Jurusan      : ${data.id_jurusan}
    `)
}
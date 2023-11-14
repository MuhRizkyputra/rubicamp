import Table from "cli-table"

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
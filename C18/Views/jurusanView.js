import Table from "cli-table"

export function showJurusan (jurusan =  []) {

    var table = new Table({
        head: ['Id Jurusan', 'Nama Jurusan'],
        colWidths: [17, 23]
    })
    jurusan.forEach((item, index) => {
    table.push([item.id_jurusan, item.nama_jurusan])
})
   console.log(table.toString())
}
import Table from "cli-table"

export function showMatakuliah (mata_kuliah =[]) {
        
        var table = new Table({
            head : ['Id Mata Kuliah' , 'Nama Mata Kuliah' , 'SKS'],
            colWidths :[10 , 25, 10]
        })
        mata_kuliah.forEach((item, index) => {
            table.push([item.id_matkul, item.nama_matkul, item.sks]) 
    })
    console.log(table.toString())
}
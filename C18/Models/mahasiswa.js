import { db } from "./connect.js"

export default class Mahasiswa{
    constructor({ nim, nama, tanggal_lahir, alamat , id_jurusan , nama_jurusan }) {
        this.nim = nim
        this.nama = nama
        this.tanggal_lahir = tanggal_lahir
        this.alamat = alamat
        this.id_jurusan = id_jurusan
        this.id_matkul = id_matkul
    }

    save(next) {
        db.run('INSERT INTO mahasiswa VALUES (?, ?, ?, ?, ?, ?)', [this.nim, this.nama, this.tanggal_lahir, this.alamat, this.id_jurusan, this.id_matkul], (err) => {
            if (err) {
                return console.log(err)
            }
            next()
        })
    }

    static add(mahasiswa, next) {
        db.run('INSERT INTO mahasiswa VALUES (?, ?, ?, ?, ?, ?)', [mahasiswa.nim, mahasiswa.nama, mahasiswa.tanggal_lahir, mahasiswa.alamat, mahasiswa.id_jurusan, mahasiswa.id_matkul], (err) => {
            if (err) {
                return console.log(err)
            }
            next()
        })
    }

    static delete(nim, next){
        db.run('DELETE FROM mahasiswa WHERE nim = ?',[nim], (err) => {
            if (err) {
                return console.log(err)
            }
            next() 
        })
    }

    static read(next){
        db.all('SELECT * FROM mahasiswa JOIN jurusan USING(id_jurusan)', (err, rows) => {
            if (err) {
                return console.log(err)
            }
            next(rows)
        })
    }
}
import { db } from "./connect.js"

export default class Mata_kuliah {
    constructor({ id_matkul, nama_matkul, sks }) {
        this.id_matkul = id_matkul
        this.nama_matkul = nama_matkul
        this.sks = sks
    }

    save(next) {
        db.run('INSERT INTO mata_kuliah VALUES (?, ?, ?)', [this.id_matkul, this.nama_matkul, this.sks], (err) => {
            if (err) {
                return console.log(err)
            }
            next()
        })
    }

    static add(mata_kuliah, next) {
        db.run('INSERT INTO dosen VALUES (?, ? )', [mata_kuliah.id_matkul, mata_kuliah.nama_matkul, mata_kuliah.sks], (err) => {
            if (err) {
                return console.log(err)
            }
            next()
        })
    }

    static delete(id_matkul, next){
        db.run('DELETE FROM mata_kuliah WHERE id_matkul = ?',[id_matkul], (err) => {
            if (err) {
                return console.log(err)
            }
            next() 
        })
    }

    static read(next){
        db.all('SELECT * FROM mata_kuliah ', (err, rows) => {
            if (err) {
                return console.log(err)
            }
            next(rows)
        })
    }
}
import { db } from './connect.js'
    
export default class Jurusan {
    constructor({ id_jurusan, nama_jurusan }) {
        this.id_jurusan = id_jurusan
        this.nama_jurusan = nama_jurusan
    }

    save(next) {
        db.run('INSERT INTO jurusan VALUES (?, ? )', [this.id_jurusan, this.nama_jurusan], (err) => {
            if (err) {
                return console.log(err)
            }
            next()
        })
    }

    static add(jurusan, next) {
        db.run('INSERT INTO jurusan VALUES (?, ? )', [jurusan.id_jurusan, jurusan.nama_jurusan], (err) => {
            if (err) {
                return console.log(err)
            }
            next()
        })
    }

    static delete(id_jurusan, next){
        db.run('DELETE FROM jurusan WHERE id_jurusan = ?',[id_jurusan], (err) => {
            if (err) {
                return console.log(err)
            }
            next() 
        })
    }

    static read(next){
        db.all('SELECT * FROM jurusan ', (err, rows) => {
            if (err) {
                return console.log(err)
            }
            next(rows)
        })
    }
}
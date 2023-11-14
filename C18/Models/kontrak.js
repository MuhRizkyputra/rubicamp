import { db } from "./connect.js"

export default class Kontrak {
    constructor({ id_kontrak, nip, id_jurusan, nim, nilai }) {
        this.id_kontrak = id_kontrak
        this.nip = nip
        this.id_jurusan = id_jurusan
        this.nim = nim
        this.nilai = nilai
    }

    save(next) {
        db.run('INSERT INTO kontrak VALUES (?, ?, ?, ?, ?)', [this.id_kontrak, this.nip, this.id_jurusan, this.nim, this.nilai], (err) => {
            if (err) {
                return console.log(err)
            }
            next()
        })
    }

    static add(kontrak, next) {
        db.run('INSERT INTO kontrak VALUES (?, ?, ?, ?, ? )', [kontrak.id_kontrak, kontrak.nip, kontrak.id_jurusan, kontrak.nim, kontrak.nilai], (err) => {
            if (err) {
                return console.log(err)
            }
            next()
        })
    }

    static delete(id, next){
        db.run('DELETE FROM kontrak WHERE id_kontrak = ?',[id_kontrak], (err) => {
            if (err) {
                return console.log(err)
            }
            next() 
        })
    }

    static read(next){
        db.all('SELECT * FROM kontrak LEFT JOIN mahasiswa USING(nim) LEFT JOIN mata_kuliah USING(id_matkul) LEFT JOIN dosen USING(nip)', (err, rows) => {
            if (err) {
                return console.log(err)
            }
            next(rows)
        })
    }
}
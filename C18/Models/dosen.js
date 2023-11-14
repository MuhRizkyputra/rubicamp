import { db } from './connect.js'
    
export default class Dosen {
    constructor({ nip, nama_dosen }) {
        this.nip = nip
        this.nama_dosen = nama_dosen
    }

    save(next) {
        db.run('INSERT INTO dosen VALUES (?, ? )', [this.nip, this.nama_dosen], (err) => {
            if (err) {
                return console.log(err)
            }
            next()
        })
    }

    static add(dosen, next) {
        db.run('INSERT INTO dosen VALUES (?, ? )', [dosen.nip, dosen.nama_dosen], (err) => {
            if (err) {
                return console.log(err)
            }
            next()
        })
    }

    static delete(nip, next){
        db.run('DELETE FROM dosen WHERE nip = ?',[nip], (err) => {
            if (err) {
                return console.log(err)
            }
            next() 
        })
    }

    static read(next){
        db.all('SELECT * FROM dosen ', (err, rows) => {
            if (err) {
                return console.log(err)
            }
            next(rows)
        })
    }
}
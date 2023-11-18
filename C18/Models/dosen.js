import { db } from './connect.js'

export default class Dosen {
    constructor({ nip, nama_dosen }) {
        this.nip = nip
        this.nama_dosen = nama_dosen
    }

    save() {
        db.run('INSERT INTO dosen VALUES (?, ? )', [this.nip, this.nama_dosen], (err, data) => {
            if (err) console.log(err)
            else (data)
        })
    }

    static read() {
        return new Promise(function (resolve, reject) {
            db.all('SELECT * FROM dosen', (err, data) => {
                if (err) reject(err)
                else resolve(data)
            })
        })
    }

    static find(nip) {
        return new Promise(function (resolve, reject) {
            db.get('SELECT * FROM dosen WHERE nip = ?', [nip], (err, data) => {
                if (err) reject(err)
                else resolve(data)
            })
        })
    }

    static add(nip, nama_dosen) {
        const dosen = new Dosen({ nip: nip, nama_dosen: nama_dosen })
        return dosen.save()
    }

    static delete(nip) {
        return new Promise(function (resolve, reject) {
            db.run('DELETE FROM dosen WHERE nip = ?', [nip], (err) => {
                if (err) reject(err)
                else resolve()
            })
        })
    }
}


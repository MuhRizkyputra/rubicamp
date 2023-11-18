import { db } from "./connect.js"

export default class Mahasiswa {
    constructor({ nim, nama, tanggal_lahir, alamat, id_jurusan, nama_jurusan }) {
        this.nim = nim
        this.nama = nama
        this.tanggal_lahir = tanggal_lahir
        this.alamat = alamat
        this.id_jurusan = id_jurusan
     
    }

    save() {
        db.run('INSERT INTO mahasiswa VALUES (?, ?, ?, ?, ?)', [this.nim, this.nama, this.tanggal_lahir, this.alamat, this.id_jurusan], (err, data) => {
            if (err) console.log(err)
            else (data)
        })
    }

    static read() {
        return new Promise(function (resolve, reject) {
            db.all('SELECT * FROM mahasiswa JOIN jurusan USING(id_jurusan)', (err, data) => {
                if (err) reject(err)
                else resolve(data)
            })
        })
    }

    static find(nim) {
        return new Promise(function (resolve, reject) {
            db.get('SELECT * FROM mahasiswa WHERE nim = ?', [nim], (err, data) => {
                if (err) reject(err)
                else resolve(data)
            })
        })
    }

    static add(nim, nama, tanggal_lahir, alamat, id_jurusan) {
        const mahasiswa = new Mahasiswa ({nim: nim, nama: nama, tanggal_lahir: tanggal_lahir, alamat: alamat, id_jurusan:id_jurusan })
        return mahasiswa.save()
    }

    static delete(nim, next) {
        return new Promise(function (resolve, reject) {
            db.run('DELETE FROM mahasiswa WHERE nim = ?', [nim], (err) => {
                if (err) reject(err)
                else (resolve)

            })
        })
    }
}
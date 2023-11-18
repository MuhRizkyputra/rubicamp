import { db } from './connect.js'

export default class Jurusan {
    constructor({ id_jurusan, nama_jurusan }) {
        this.id_jurusan = id_jurusan
        this.nama_jurusan = nama_jurusan
    }

    save() {
        db.run('INSERT INTO jurusan VALUES (?, ? )', [this.id_jurusan, this.nama_jurusan], (err, data) => {
            if (err) console.log(err)
            else (data)
        })
    }

    static read(next) {
        return new Promise(function (resolve, reject) {
            db.all('SELECT * FROM jurusan ', (err, data) => {
                if (err) reject(err)
                else resolve(data)
            })
        })
    }

    static find(id_jurusan) {
        return new Promise(function (resolve, reject) {
            db.get('SELECT * FROM jurusan WHERE id_jurusan = ?', [id_jurusan], (err, data) => {
                if (err) reject(err)
                else resolve(data)
            })
        })
    }

    static add(id_jurusan, nama_jurusan) {
        const jurusan = new Jurusan({ id_jurusan: id_jurusan, nama_jurusan: nama_jurusan })
        return jurusan.save()
    }

    static delete(id_jurusan) {
        return new Promise(function (resolve, reject) {
            db.run('DELETE FROM jurusan WHERE id_jurusan = ?', [id_jurusan], (err) => {
                if (err) reject(err)
                else resolve()
            })
        })
    }

}

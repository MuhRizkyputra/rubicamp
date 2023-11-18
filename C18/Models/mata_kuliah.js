import { db } from "./connect.js"

export default class Mata_kuliah {
    constructor({ id_matkul, nama_matkul, sks }) {
        this.id_matkul = id_matkul
        this.nama_matkul = nama_matkul
        this.sks = sks
    }

    save() {
        db.run('INSERT INTO mata_kuliah VALUES (?, ?, ?)', [this.id_matkul, this.nama_matkul, this.sks], (err, data) => {
            if (err) console.log(err)
            else (data)
        })
    }

    static read(next) {
        return new Promise(function (resolve, reject) {
            db.all('SELECT * FROM mata_kuliah ', (err, data) => {
                if (err) reject(err)
                else resolve(data)
            })
        })
    }

    static find(id_matkul) {
        return new Promise(function (resolve, reject) {
            db.get('SELECT * FROM mata_kuliah WHERE id_matkul = ?', [id_matkul], (err, data) => {
                if (err) reject(err)
                else resolve(data)
            })
        })
    }

    static add(id_matkul, nama_matkul, sks) {
        const mata_kuliah = new Mata_kuliah({ id_matkul: id_matkul, nama_matkul: nama_matkul, sks: sks })
        return mata_kuliah.save()
    }

    static delete(id_matkul) {
        return new Promise(function (resolve, reject) {
            db.run('DELETE FROM mata_kuliah WHERE id_matkul = ?', [id_matkul], (err) => {
                if (err) reject(err)
                else resolve()
            })
        })
    }
}

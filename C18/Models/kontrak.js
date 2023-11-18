import { db } from "./connect.js"

export default class Kontrak {
    constructor(obj) {
        this.nip = obj.nip; this.id_matkul = obj.id_matkul;
        this.nim = obj.nim; this.nilai = obj.nilai;
    }


    save() {
        db.run("INSERT INTO kontrak(nim, id_matkul, nip)VALUES (?, ?, ?)", [this.nim, this.id_jurusan, this.nip], (err, data) => {
            if (err) console.log(err)
            else data
        })

    };

    static read() {
        return new Promise(function (resolve, reject) {
            db.all("SELECT * FROM kontrak  LEFT JOIN mahasiswa USING(nim) LEFT JOIN mata_kuliah USING(id_matkul) LEFT JOIN dosen USING(nip)", (err, data) => {          
                if (err) reject(err)
                else resolve(data)

            })
        })
    }

    static find(nim) {
        return new Promise(function (resolve, reject) {
            db.all("SELECT id_kontrak,mahasiswa.nama AS nama , mata_kuliah.nama_matkul AS mata_kuliah,dosen.nama_dosen AS dosen,nilai FROM kontrak LEFT JOIN mahasiswa USING(nim) LEFT JOIN mata_kuliah ON mata_kuliah.id_matkul = kontrak.id_matkul LEFT JOIN dosen ON dosen.nip = kontrak.nip WHERE kontrak.nim = ?", [nim], (err, data) => {
                if (err) reject(err)
                else resolve(data)
            })
        })
    }

    static add(nim, id_matkul, nip) {
        db.run("INSERT INTO kontrak(nim, id_matkul, nip)VALUES (?, ?, ?)", [this.nim, this.id_jurusan, this.nip], (err, data) => {
            if (err) console.log(err)
            else data
        })
    }

    static delete(id_kontrak) {
        return new Promise(function (resolve, reject) {
            db.get("DELETE FROM kontrak WHERE id_kontrak = ? ", [id_kontrak], (err, data) => {
                if (err) reject(err)
                else resolve(data)
            })
        })
    }

    static update(nilai, id_kontrak, nim) {
        return new Promise(function (resolve, reject) {
            db.run("UPDATE kontrak SET nilai = ? WHERE id_kontrak = ? AND nim = ? ", [nilai, id_kontrak, nim], (err, data) => {
                if (err) reject(err)
                else resolve(data)
            })
        })
    }

    static findAdd(nim, id_matkul) {
        return new Promise(function (resolve, reject) {
            db.get("SELECT * FROM kontrak WHERE nim = ? AND id_matkul = ? ", [nim, id_matkul], (err, data) => {
                if (err) reject(err)
                else resolve(data)
            })
        })
    }

    static findDelete(id_kontrak) {
        return new Promise(function (resolve, reject) {
            db.get("SELECT * FROM kontrak WHERE id-kontrak = ?", [id_kontrak], (err, data) => {
                if (err) reject(err)
                else resolve(data)
            })
        })
    }

    static findUpdate(id_kontrak, nim) {
        return new Promise(function (resolve, reject) {
            db.get("SELECT * FROM kontrak WHERE id_kontrak = ? AND nim = ?", [id_kontrak, nim], (err, data) => {
                if (err) reject(err)
                else resolve(data)
            })
        })
    }

}
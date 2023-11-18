import { rl } from "../Models/connect.js";
import Mata_kuliah from "../Models/mata_kuliah.js";
import { findResl, option, showMatakuliah } from "../Views/matakuliahView.js";
import { home } from "../c18.js";

export function findMatkul() {
    Mata_kuliah.read(function (mata_kuliah) {
        showMatakuliah(mata_kuliah)
    })
}

export default class MatakuliahController {

    static option() {
        option();
        rl.question("Masukan salah satu nomer dari opsi di atas: ", (index) => {
            switch (index) {
                case '1':
                    MatakuliahController.read();
                    break;
                case '2':
                    MatakuliahController.find();
                    break;
                case '3':
                    MatakuliahController.add();
                    break;
                case '4':
                    MatakuliahController.delete();
                    break;
                case '5':
                    home()
                    break;
                default:
                    console.log('Nomor yang anda masukan tidak sesuai, silahkan coba lagi');
                    MatakuliahController.option();
                    break;

            }
        })
    }

    static async read() {
        const mata_kuliah = await Mata_kuliah.read();
        if (mata_kuliah) {
            showMatakuliah(mata_kuliah)
            MatakuliahController.option()
        } else {
            console.log('terjadi kesalahan dalam proses penampilan data, silahkan coba lagi')
            MatakuliahController.option()
        }
    }

    static find() {
        rl.question('Masukan Kode Mata Kuliah: ', async (kode) => {
            const search = await Mata_kuliah.find(kode);
            if (search) {
                findResl(search);
                MatakuliahController.option()
            } else {
                console.log(`Mata Kuliah dengan Kode Mata Kuliah ${kode}, tidak terdaftar `);
                MatakuliahController.option()
            }
        })
    }
    static async add() {
        console.log('Lengkapi data di bawah ini :\n');
        const mata_kuliah = await Mata_kuliah.read();
        if (mata_kuliah) {
            showMatakuliah(mata_kuliah);
            rl.question('Kode Mata Kuliah :', async (kode) => {
                rl.question('Nama Mata Kuliah :', async (nama) => {
                    rl.question('SKS :', async (sks) => {
                        if (await Mata_kuliah.find(kode)) {
                            console.log('Gagal menambahkan Mata Kuliah karena sudah ada di database');
                            MatakuliahController.option()
                        } else {
                            Mata_kuliah.add(kode, nama, sks);
                            console.log('Mata Kuliah telah ditambahkan');
                            MatakuliahController.option()
                        }
                    })
                })
            })

        } else {
            console.log('Terjadi kesalahan dalam menapilkan data')
            MatakuliahController.option();
        }
    }

    static delete() {
        rl.question('Masukkan Kode Mata Kuliah: ', async (kode) => {
            const mata_kuliah = await Mata_kuliah.find(kode)
            if (mata_kuliah) {
                console.log(`Data Mata Kuliah ${kode}, telah di hapus`)
                await Mata_kuliah.delete(kode),
                MatakuliahController.option()
            } else {
                console.log('Gagal menghapus Mata Kuliah, Kode Mata Kuliah tidak terdaftar')
                MatakuliahController.option()
            }
        })
    }



}
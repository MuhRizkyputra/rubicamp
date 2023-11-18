import { rl } from "../Models/connect.js";
import Dosen from "../Models/dosen.js";
import { findResult, option, showDosen } from "../Views/dosenView.js";
import { home } from "../c18.js";

export function findDosen() {
    Dosen.read(function (dosen) {
        showDosen(dosen)
    })
}

export default class DosenControllers {

    static option() {
        option();
        rl.question("Masukan salah satu nomer dari opsi di atas: ", (index) => {
            switch (index) {
                case '1':
                    DosenControllers.read();
                    break;
                case '2':
                    DosenControllers.find();
                    break;
                case '3':
                    DosenControllers.add();
                    break;
                case '4':
                    DosenControllers.delete();
                    break;
                case '5':
                    home()
                    break;
                default:
                    console.log('Nomor yang anda masukan tidak sesuai, silahkan coba lagi');
                    DosenControllers.option();
                    break;

            }
        })
    }

    static async read() {
        const dosen = await Dosen.read();
        // console.log(dosen)
        if (dosen) {
            showDosen(dosen)
            DosenControllers.option()
        } else {
            console.log('terjadi kesalahan dalam proses penampilan data, silahkan coba lagi')
            DosenControllers.option()
        }
    }

    static find() {
        rl.question('Masukan NIP: ', async (kode) => {
            const search = await Dosen.find(kode);
            if (search) {
                findResult(search);
                DosenControllers.option()
            } else {
                console.log(`Dosen dengan NIP ${kode}, tidak terdaftar `);
                DosenControllers.option()
            }
        })
    }

    static async add() {
        console.log('Lengkapi data di bawah ini :\n');
        const dosen = await Dosen.read();
        if (dosen) {
            showDosen(dosen);
            rl.question('NIP :', async (kode) => {
                rl.question('Nama Dosen :', async (nama) => {
                    if (await Dosen.find(kode)) {
                        console.log('Gagal menambahkan Dosen karena sudah ada di database');
                        DosenControllers.option()
                    } else {
                        Dosen.add(kode, nama);
                        console.log('Dosen telah ditambahkan');
                        DosenControllers.option()
                    }
                })
            })

        } else {
            console.log('Terjadi kesalahan dalam menapilkan data')
            DosenControllers1.option();
        }
    }

    static delete() {
        rl.question('Masukkan NIP: ', async (kode) => {
            const dosen = await Dosen.find(kode)
            if (dosen) {
                console.log(`Data Dosen ${kode}, telah di hapus`)
                await Dosen.delete(kode),
                    DosenControllers.option()
            } else {
                console.log('Gagal menghapus Dosen, NIP tidak terdaftar')
                DosenControllers.option()
            }
        })
    }

}
import { rl } from "../Models/connect.js";
import Jurusan from "../Models/jurusan.js"
import { findHasil, option, showJurusan } from "../Views/jurusanView.js";
import { home } from "../c18.js";

export function findAll() {
    Jurusan.read(function (jurusan) {
        showJurusan(jurusan)
    })
}

export default class JurusanControllers {

    static option() {
       option();
        rl.question("Masukkan salah satu nomer dari opsi di atas: ", (index) => {
            switch (index) {
                case '1':
                    JurusanControllers.read();
                    break;
                case '2':
                    JurusanControllers.find();
                    break;
                case '3':
                    JurusanControllers.add();
                    break;
                case '4':
                    JurusanControllers.delete();
                    break;
                case '5':
                    home()
                    break;
                default:
                    console.log('Nomor yang anda masukan tidak sesuai, silahkan coba lagi');
                    JurusanControllers.option();
                    break;

            }
        })
    }

    static async read() {
        const jurusan = await Jurusan.read();
        if (jurusan) {
            showJurusan(jurusan)
            JurusanControllers.option()
        } else {
            console.log('terjadi kesalahan dalam proses penampilan data, silahkan coba lagi')
            JurusanControllers.option()
        }
    }

    static find() {
        rl.question('Masukan Kode Jurusan: ', async (kode) => {
            const search = await Jurusan.find(kode);
            if (search) {
                findHasil(search);
                JurusanControllers.option()
            } else {
                console.log(`Dosen dengan Kode Jurusan ${kode}, tidak terdaftar `);
                DosenControllers.option()
            }
        })
    }

    static async add() {
        console.log('Lengkapi data di bawah ini :\n');
        const jurusan = await Jurusan.read();
        if (jurusan) {
            showJurusan(jurusan);
            rl.question('Kode Jurusan :', async (kode) => {
                rl.question('Nama Jurusan :', async (nama) => {
                    if (await Jurusan.find(kode)) {
                        console.log('Gagal menambahkan Kode Jurusan karena sudah ada di database');
                        JurusanControllers.option()
                    } else {
                        Jurusan.add(kode, nama);
                        console.log('Jurusan telah ditambahkan');
                        JurusanControllers.option()
                    }
                })
            })

        } else {
            console.log('Terjadi kesalahan dalam menapilkan data')
            JurusanControllers.option();
        }
    }

    static delete() {
        rl.question('Masukkan Kode Jurusan: ', async (kode) => {
            const jurusan = await Jurusan.find(kode)
            if (jurusan) {
                console.log(`Data Jurusan ${kode}, telah di hapus`)
                await Jurusan.delete(kode),
                    JurusanControllers.option()
            } else {
                console.log('Gagal menghapus Jurusan, Kode Jurusan tidak terdaftar')
                JurusanControllers.option()
            }
        })
    }

}  
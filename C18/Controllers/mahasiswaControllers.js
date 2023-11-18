import { rl } from "../Models/connect.js";
import Jurusan from "../Models/jurusan.js";
import Mahasiswa from "../Models/mahasiswa.js"
import { showJurusan } from "../Views/jurusanView.js";
import { findRes, option, showMahasiswa } from "../Views/mahasiswaView.js"
import { home } from "../c18.js";

export function findaMahasiswa() {
    Mahasiswa.read(function (mahasiswa) {
        showMahasiswa(mahasiswa)
    })
}

export class MahasiswaControllers {

    static option() {
        option();
        rl.question("Masukan salah satu nomer dari opsi di atas: ", (index) => {
            switch (index) {
                case '1':
                    MahasiswaControllers.read();
                    break;
                case '2':
                    MahasiswaControllers.find();
                    break;
                case '3':
                    MahasiswaControllers.add();
                    break;
                case '4':
                    MahasiswaControllers.delete();
                    break;
                case '5':
                    home()
                    break;
                default:
                    console.log('Nomor yang anda masukan tidak sesuai, silahkan coba lagi');
                    MahasiswaControllers.option();
                    break;

            }
        })
    }

    static async read() {
        const mahasiswa = await Mahasiswa.read();
        if (mahasiswa) {
            showMahasiswa(mahasiswa)
            MahasiswaControllers.option()
        } else {
            console.log('terjadi kesalahan dalam proses penampilan data, silahkan coba lagi')
            MahasiswaControllers.option()
        }
    }
    static find() {
        rl.question('Masukan NIM: ', async (kode) => {
            const search = await Mahasiswa.find(kode);
            if (search) {
                findRes(search);
                MahasiswaControllers.option()
            } else {
                console.log(`Mahasiswa dengan NIM ${kode}, tidak terdaftar `);
                MahasiswaControllers.option()
            }
        })
    }

    static add() {
        console.log('Lengkapi data di bawah ini :')
        Mahasiswa.read().then((data) => {
            showMahasiswa(data);
            rl.question("NIM :", (nim) => {
                rl.question("Nama :", (nama_mahasiswa) => {
                    rl.question("Tanggal lahir :", (tanggal_lahir) => {
                        rl.question("Alamat :", (alamat) => {
                            Jurusan.read().then((data) => {
                                showJurusan(data)
                                rl.question('Kode Jurusan :', (id_jurusan) => {
                                    Mahasiswa.find(nim).then((data) => {
                                        console.log(`Mahasiswa dengan NIM ${data.nim} sudah terdaftar. Silahkan masukkan data dengan benar`)
                                        MahasiswaControllers.option()
                                    }).catch(() => {
                                        Mahasiswa.add(nim, nama_mahasiswa, tanggal_lahir, alamat, id_jurusan,);
                                        console.log('Mahasiswa telah ditambahkan');
                                        Mahasiswa.read().then((data) => {
                                            showMahasiswa(data)
                                            MahasiswaControllers.option()
                                        }).catch(() => {
                                            console.log('Gagal menambahkan data Mahasiswa');
                                            MahasiswaControllers.option()
                                        })
                                    })
                                })
                            }).catch(() => {
                                console.log('Terjadi kesalahan pada saat menampilkan data. Silahkan coba lagi');
                                MahasiswaControllers.option()
                            })
                        })
                    })
                })
            })

        }).catch(() => {
            console.log("Terjadi kesalahan dalam menampilkan data Mahasiswa. Silahkan coba lagi")
            MahasiswaControllers.option()
        })
    }

    static delete() {
        rl.question('Masukkan NIM: ', async (kode) => {
            const mahasiswa = await Mahasiswa.find(kode)
            if (mahasiswa) {
                console.log(`Data Mahasiswa ${kode}, telah di hapus`)
                Mahasiswa.delete(kode),
                    MahasiswaControllers.option()
            } else {
                console.log('Gagal menghapus Mahasiswa, NIP tidak terdaftar')
                MahasiswaControllers.option()
            }
        })
    }

}
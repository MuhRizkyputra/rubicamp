import { rl } from "../Models/connect.js";
import Dosen from "../Models/dosen.js";
import Kontrak from "../Models/kontrak.js"
import Mahasiswa from "../Models/mahasiswa.js";
import Mata_kuliah from "../Models/mata_kuliah.js";
import { showDosen } from "../Views/dosenView.js";
import { findMatakul, findReslt, option, showKontrak } from "../Views/kontrakView.js";
import { showMahasiswa } from "../Views/mahasiswaView.js";
import { showMatakuliah } from "../Views/matakuliahView.js";
import { home, line } from "../c18.js";


export function findKontrak() {
    Kontrak.read(function(kontrak) {
        showKontrak(kontrak)
    })
}


export default class KontrakControllers {

    static option() {
        option();
        rl.question("Masukkan salah satu nomer dari opsi di atas: ", (index) => {
            switch (index) {
                case '1':
                    KontrakControllers.read();
                    break;
                case '2':
                    KontrakControllers.find();
                    break;
                case '3':
                    KontrakControllers.add();
                    break;
                case '4':
                    KontrakControllers.delete();
                    break;
                case '5':
                   KontrakControllers.update();
                    break;
                case '6':
                    home()
                    break;
                default:
                    console.log('Nomor yang anda masukan tidak sesuai, silahkan coba lagi');
                    KontrakControllers.option();
                    break;

            }
        })
    }
    static async read() {
        const kontrak = await Kontrak.read();
        if (kontrak) {
            // console.log(kontrak)
            showKontrak(kontrak)
            KontrakControllers.option()
        } else {
            console.log('terjadi kesalahan dalam proses penampilan data, silahkan coba lagi')
            KontrakControllers.option()
        }
    }
    static async find() {
        const kontrak = await Kontrak.read();
        if (kontrak) {
            showKontrak(kontrak);
            rl.question(`Masukkan NIM Mahasiswa :`, async (nim) => {
                const kontrak = await Kontrak.find(nim)
                if (!kontrak.toString()) {
                    console.log(`Tidak ada kontrak dengan NIM ${nim}`);
                    KontrakControllers.option()
                } else {
                    console.log(`Daftar kontrak mahasiswa dengan NIM ${nim} adalah:`)
                    findReslt(kontrak);
                    KontrakControllers.option();
                }
            })
        } else {
            console.log('terjadi kesalahan dalam proses penampilan data, silahkan coba lagi')
            KontrakControllers.option()
        }
    }
    static async add() {
        console.log('Lengkapi data dibawah ini :')
        const mahasiswa = await Mahasiswa.read()
        if (mahasiswa) {
            showMahasiswa(mahasiswa)
            rl.question(`masukkan NIM mahasiswa: `, async (nim) => {
                const matakul = await Mata_kuliah.read(nim)
                if (matakul) {
                    showMatakuliah(matakul)
                    rl.question('masukkan Kode mata kuliah:', async (id_matkul) => {
                        const dosen = await Dosen.read();
                        if (dosen) {
                            showDosen(dosen)
                            rl.question('masukkan NIP Dosen:', async (nip) => {
                                    Kontrak.add(nim, id_matkul, nip)
                                    KontrakControllers.read()
                                    KontrakControllers.option()  
                            })
                        }
                    })
                } else {
                    console.log('terjadi kesalahan dalam proses penampilan data, silahkan coba lagi')
                    KontrakControllers.option()
                }
            })
        }
    }
    static delete() {
        rl.question('Masukkan ID kontrak: ', async (id_kontrak) => {
            const kontrak = await Kontrak.find(id_kontrak)
            if (kontrak) {
                console.log(`Data Kontrak ${id_kontrak}, telah di hapus`)
                await Kontrak.delete(id_kontrak),
                KontrakControllers.option()
            } else {
                console.log('Gagal menghapus Kontrak, ID Kontrak tidak terdaftar')
                KontrakControllers.option()
            }
        })
    }
    static async update() {
        const kontrak = await Kontrak.read();
        if (kontrak) {
            showKontrak(kontrak)
            rl.question('Masukkan NIM Mahasiswa:', async (nim) => {
                line()
                const kontrak = await Kontrak.find(nim)
                if (kontrak.toString()) {
                    console.log(`Detail mahasiswa dengan NIM '${nim}' :`)
                    findMatakul(kontrak)
                    line()
                    rl.question('Masukkan id yang akan dirubah nilainya :', async (id_kontrak) => {
                        line()
                        if (await Kontrak.findUpdate(id_kontrak, nim)) {
                            rl.question('tulis nilai yang baru :', async (nilai) => {
                                line()
                                await Kontrak.update(nilai, id_kontrak, nim)
                                console.log('Nilai telah di update')
                                await KontrakControllers.read()
                            })
                        } else{
                            console.log('ID dan NIM yang anda masukkan salah. silahkan masukkan data yang benar.')
                            KontrakControllers.option()
                        }

                    })
                } else {
                    console.log(`kontrak dengan NIM ${nim} tidak ada, silahkan coba lagi`)
                    KontrakControllers.option()
                }
            })

        }  else {
            console.log('terjadi kesalahan dalam proses penampilan data, silahkan coba lagi')
            KontrakControllers.option()}
    }
}
import { rl } from "../Models/connect.js";
import Dosen from "../Models/dosen.js";
import Kontrak from "../Models/kontrak.js"
import Mahasiswa from "../Models/mahasiswa.js";
import Mata_kuliah from "../Models/mata_kuliah.js";
import { showDosen } from "../Views/dosenView.js";
import { findReslt, option, showKontrak } from "../Views/kontrakView.js"
import { showMahasiswa } from "../Views/mahasiswaView.js";
import { showMatakuliah } from "../Views/matakuliahView.js";
import { home } from "../c18.js";

export function findKontrak() {
    Kontrak.read(function (kontrak) {
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
                // case '5':
                //     ()
                //     ;
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
        // console.log(kontrak)
        if (kontrak) {
            showKontrak(kontrak)
            KontrakControllers.option()
        } else {
            console.log('terjadi kesalahan dalam proses penampilan data, silahkan coba lagi')
            KontrakControllers.option()
        }
    }

    static async find (){
        const kontrak = await Kontrak.read();
        // console.log(kontrak)
        if (kontrak) {
            showKontrak(kontrak)
            rl.question(`Masukan NIM Mahasiswa :` , async(nim) => {
                const kontrak = await Kontrak.find(nim)
                //console.log(kontrak)
                if (!kontrak.toString()) {
                    console.log(`Tidak ada Kontrak dengan NIM ${nim}`);
                    KontrakControllers.option()
                }else {
                    console.log(`Daftar kontrak mahasiswa dengan NIM ${nim} adalah:`)
                    findReslt(kontrak)
                    KontrakControllers.option()
                }
            })
        }else{
            console.log('terjadi kesalahan dalam proses penampilan data, silahkan coba lagi')
            KontrakControllers.option()
        }
    }


    static async add (){
        console.log('Lengkapi data di bawah ini :\n');
        const mahasiswa = await Mahasiswa.read()
        if(mahasiswa){
            showMahasiswa(mahasiswa)
            rl.question(`Masukan Nim Mahasiswa :` , async(nim)=> {
                const mata_kuliah = await Mata_kuliah.read()
                if (mata_kuliah){
                    showMatakuliah(mata_kuliah)
                    rl.question(`Masukan Kode Mahasiswa :` , async(id_matkul)=> {
                        const dosen = await Dosen.read()
                        if (dosen){
                            showDosen(dosen)
                            rl.question(`Masukan NIP Dosen :` , async(nip)=>{
                                Kontrak.add(nim, id_matkul, nip)
                                KontrakControllers.read()
                                KontrakControllers.option()
                            })
                        }
                    })
                } else {
                    console.log('terjadi kesalahan dalam proses data, silahkan coba lagi')
                    KontrakControllers.option()
                }
            })
        }
    }
}
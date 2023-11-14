import Mahasiswa from "../Models/mahasiswa.js"
import { showMahasiswa } from "../Views/mahasiswaView.js"

export function findaMahasiswa () {
    Mahasiswa.read(function(mahasiswa){
        showMahasiswa(mahasiswa)
    })
}
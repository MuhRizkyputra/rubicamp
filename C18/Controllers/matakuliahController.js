import Mata_kuliah from "../Models/mata_kuliah.js";
import { showMatakuliah } from "../Views/matakuliahView.js";

export function findMatkul () {
    Mata_kuliah.read(function(mata_kuliah){
        showMatakuliah(mata_kuliah)
    })
}
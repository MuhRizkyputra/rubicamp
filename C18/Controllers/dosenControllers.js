import Dosen from "../Models/dosen.js";
import { showDosen } from "../Views/dosenView.js";

export function findDosen(){
    Dosen.read(function(dosen){
        showDosen(dosen)
    })
}
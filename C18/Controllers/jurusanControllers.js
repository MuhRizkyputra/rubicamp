import Jurusan  from "../Models/jurusan.js"
import { showJurusan } from "../Views/jurusanView.js"

export function findAll(){
     Jurusan.read(function(jurusan){
        showJurusan(jurusan)
     })
}


import Kontrak from "../Models/kontrak.js"
import { showKontrak } from "../Views/kontrakView.js"

export function findKontrak () {
    Kontrak.read(function(kontrak){
        showKontrak(kontrak)
    })
}

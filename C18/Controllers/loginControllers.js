import { rl } from "../Models/connect.js"
import Masuk from "../Models/login.js"
import { masuk } from "../Views/loginView.js"
import { home } from "../c18.js"

export default class MasukAkun {
    static in() {
        MasukAkun.izin()
    }
    static izin() {
        rl.question('Username :', async (username) => {
            Masuk.readUser(username, function (data) {
                if (!data) {
                    console.log('Username tidak terdaftar, silahkan coba lagi')
                    MasukAkun.izin()
                } else {
                    rl.question('Password :', (password) => {
                        Masuk.readPass(password, function (item) {
                            if (!item) {
                                console.log('Password salah, silahkan coba lagi')
                                MasukAkun.izin()
                            } else {
                                masuk(username)
                                home()
                            }
                        })
                    })
                }
            })
        })
    }
}
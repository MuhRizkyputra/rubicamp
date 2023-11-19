import { db } from "./connect.js"

export default class Masuk {
    constructor(username, password, status) {
        this.username = username
        this.password = password
        this.status = status
    }

    static readUser(username, next) {
        db.get('SELECT * FROM login WHERE username = ?', [username], (err, data) => {
            if (err) {
                console.log(err)
            }
            next(data)
        })
    }

    static readPass(password, next) {
        db.get('SELECT * FROM login WHERE password = ?', [password], (err, data) => {
            if (err) {
                console.log(err)
            }
            next(data)
        })
    }

    static readStatus(status, next) {
        db.get('SELECT * FROM login WHERE status = ?', [status], (err, data) => {
            if (err) {
                console.log(err)
            }
            next(data)
        })
    }
}
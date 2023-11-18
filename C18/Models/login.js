import { db } from "./connect"

const login = (username) => new Promise(function(resolve,reject){
    db.get('SELECT * FROM login WHERE username =?' , [usarname], (err,data) => {
        if (err) reject(err)
        else resolve(data)
    })
})
const admin = require("firebase-admin");

const serviceAccount = require("./secrets.json");

export const verifyTdToken = (token) => {
    console.log(token, "dfdfdfd");
    if (!admin.apps.length){
        admin.initializeApp({
            credential: admin.credential.cert(serviceAccount)
            // databaseURL: 
        })
    }

    return admin
        .auth()
        .verifyIdToken(token)
        .catch((error) => {
        throw error;
    })
}
const express = require('express');
const app = express();
const bcrypt = require('bcryptjs')
require('dotenv').config();


const port = process.env.PORT || 3002
const password = process.env.PASSWORD;


let hashedPassword;


bcrypt.genSalt(10, (err, salt) => {

    bcrypt.hash(password, salt, (err, hash) => {
        if (err) {
            console.log("cannot encrypt");
        }


        hashedPassword = hash


        bcrypt.compare(password, hashedPassword,
            async (err, ismatch) => {
                if (ismatch) {
                    console.log('Encrypted password is: ', "On the .env file");
                    console.log('Decrypted password is: ', hashedPassword);
                }

                if (!ismatch) {
                    console.log(hashedPassword + ' is  not encryption ' )

                }
            }
        )


    })
})




app.listen(port, () => {
    console.log(`server connected on ${port}`);
})
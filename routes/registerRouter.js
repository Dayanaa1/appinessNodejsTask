let express = require('express');
let router = express.Router();
let Register = require('../models/register')


router.post('/register', (req, res) => {
    let registerData = req.body;
    let register = Register(registerData);
    register.save((error, data) => {
        if (error) {
            console.log(error)
        }
        else {
            console.log(data);
            res.json(data);

        }
    })
})

router.post('/login', (req, res) => {

    let loginData = req.body

    Register.findOne({ email: loginData.email }, (error, register) => {
        if (error) {
            console.log(error)
        } else {
            if (!register) {
                res.status(401).send("Invalid email")
            } else
                if (register.password !== loginData.password) {
                    res.status(401).send('Invalid password')
                } else {
                    res.status(200).send(register)
                }
        }
    })

})

module.exports = router;

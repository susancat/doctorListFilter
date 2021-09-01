const express = require('express');
const router = express.Router();
const Doctor = require('../models/doctor');

router.get('/', (req, res) => {
    Doctor.find({}, (err, doctors) => {
        if(err){
            res.redirect('back')
        } else {
            res.status(200).json(doctors);
        }
    })
})

module.exports = router;
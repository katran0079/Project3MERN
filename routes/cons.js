
const express = require('express');
const router = express.Router();


const Con = require('../models/Com');

router.get('/', async (req, res) => {
    
})

router.post('/', async (req, res) => {
    
    const newCon = new Con({
        fullDesc: 'Our first comic Con'
        
    })

    try {
        const newConAdded = await newCon.save();
        res.json(newConAdded);
    } catch(err) {
        console.error(err.message);
        res.status(500).send('Server Error, Possibly a duplicate Con');
    }
})  

module.exports = router;
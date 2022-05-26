const express = require('express');
const router = express();
const db = require('oasis/db');

router.get('', (req, res) => {
    db.query('select * from easyMeal', (err, data) => {
        if(!err) res.send({products: data});
        else res.send(err);
    })
})

module.exports = router;
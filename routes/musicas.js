var express = require('express');
var router = express.Router();

var db = require('../db');

router.get('/', (req, res, next) => {
    db("musicas").then((musicas)=>{
        res.render('index', {
            musicas: musicas
        });
    },next);
});

router.get('/add', (req, res, next) => {
    res.render('add');
});

router.post('/', (req, res, next) => {
});

router.get('/edit/:id', (req, res, next) => { 
});

router.put('/edit/:id', (req, res, next) => { 
});

router.delete('/delete/:id', (req, res, next) => { 
});

module.exports = router;
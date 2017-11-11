'use strict';

const express = require('express');
const router = express.Router();
const burger = require('../models/burger.js');

router.get('/', (req, res) => {
  burger.getAll((err, result) => {
    if (err) console.log(err);
    res.render('index', { burger_list: result || [] });
  });
});


router.post('/burger', (req, res) => {
  burger.create(req.body.burger_name, (err) => {
    if (err) console.log(err);
    res.redirect('/');
  });
});

router.put('/burger', (req, res) => {
  burger.update(req.body.burger_id, (err) => {
    if (err) console.log(err);
    res.redirect('/');
  });
});

module.exports = router;

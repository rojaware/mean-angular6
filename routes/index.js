var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Book = require('../models/Book.js');
var Member = require('../models/Member.js');

/* GET ALL BOOKS */
router.get('/book/', function (req, res, next) {
    Book.find(function (err, products) {
        if (err) return next(err);
        res.json(products);
    });
});

/* GET SINGLE BOOK BY ID */
router.get('/book/:id', function (req, res, next) {
    Book.findById(req.params.id, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

/* SAVE BOOK */
router.post('/book/', function (req, res, next) {
    Book.create(req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

/* UPDATE BOOK */
router.put('/book/:id', function (req, res, next) {
    Book.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

/* DELETE BOOK */
router.delete('/book/:id', function (req, res, next) {
    Book.findByIdAndRemove(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});


/* GET ALL MemberS */
router.get('/member/', function (req, res, next) {
    Member.find(function (err, products) {
        if (err) return next(err);
        console.log('index.53.'+ JSON.stringify(products))


        res.json(products);
    });
});

/* GET SINGLE Member BY ID */
router.get('/member/:id', function (req, res, next) {
    Member.findById(req.params.id, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

/* SAVE Member */
router.post('/member/', function (req, res, next) {
    Member.create(req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

/* UPDATE Member */
router.put('/member/:id', function (req, res, next) {
    Member.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

/* DELETE Member */
router.delete('/member/:id', function (req, res, next) {
    Member.findByIdAndRemove(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});



module.exports = router;
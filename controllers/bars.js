const User = require('../models/user');
const Bar = require('../models/bar');
const Drink = require('../models/drink');

module.exports = {
    user,
    index,
    new: newBar,
    create,
    show,
    edit,
    updateBar,
    delete: deleteBar,
};

function deleteBar(req, res) {
    Bar.findByIdAndDelete(req.params.id, req.body, function(err, bar) {
        bar.save(function(err) {
            if(err) return res.redirect('/bars');
            res.redirect('/bars')
        })
    })
}

function updateBar(req, res) {
    Bar.findByIdAndUpdate(req.params.id, req.body, {new: true}, function(err, bar) {
        bar.save(function(err) {
            if (err) return res.redirect('/bars');
            res.redirect('/bars')
        })
    })
}

function edit(req, res) {
    Bar.findById(req.params.id, function(err, bar) {
        res.render('bars/edit', {bar, user: req.user})
    })
}

function show(req, res) {
    Bar.findById(req.params.id)
    .populate('drinks').exec(function(err, bar) {
        Drink.find({_id: {$nin: bar.drinks}})
        .exec(function(err, drinks) {
            res.render('bars/show', {
                bar, drinks, user: req.user
            })
        })
    })
}

function create(req, res) {
    var bar = new Bar(req.body);
    bar.save(function(err) {
        if (err) return res.redirect('/bars/new');
        res.redirect('/bars')
    });
}

function newBar(req, res) {
    res.render('bars/new', {user: req.user})
}

function index(req, res) {
    Bar.find({}, function(err, bars) {
        res.render('bars/index', {bars, user: req.user, name: req.query.name});
    });
}

function user(req, res) {
    User.find({}, function(err, users) {
        res.render('bars/index', {
            users,
            user: req.user,
            name: req.query.name
        });
    });
}


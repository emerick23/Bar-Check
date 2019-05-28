const User = require('../models/user');
const Bar = require('../models/bar');

module.exports = {
    user,
    index,
    new: newBar,
    create,
    show,
};

function show(req, res) {
    Bar.findById(req.params.id, function(err, bar) {
        res.render('bars/show', {bar, user})
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
    res.render('bars/new', {user})
}

function index(req, res) {
    Bar.find({}, function(err, bars) {
        res.render('bars/index', {bars, user});
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


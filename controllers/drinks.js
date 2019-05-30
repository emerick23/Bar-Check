var Drink = require('../models/drink');
var Bar = require('../models/bar');
var User = require('../models/user');

module.exports = {
    new: newDrink,
    addToBar,
    create,
    delete: deleteDrink,
};

function deleteDrink(req, res) {
    Drink.findByIdAndDelete(req.params.id, function(err, drink) {
        drink.save(function(err) {
            if(err) return res.redirect('/drinks/new');
            res.redirect('/drinks/new')
        })
    })
}

function create(req, res) {
    var drink = new Drink(req.body);
    drink.save(function(err) {
        if (err) return res.redirect('drinks/new');
        res.redirect('/drinks/new')
    })
}

function addToBar(req, res) {
    Bar.findById(req.params.id, function(err, bar) {
        bar.drinks.push(req.body.drinkId);
        bar.save(function(err) {
            res.redirect(`/bars/${bar._id}`);
        })
    })
}

function newDrink(req, res) {
    Drink.find({}, function(err, drinks) {
        res.render('drinks/new', {
            drinks,
            user: req.user
        })
    })
}
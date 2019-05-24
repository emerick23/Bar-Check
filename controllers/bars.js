const User = require('../models/user');
const Bar = require('../models/bar');

module.exports = {
    index,
};

function index(req, res) {
    User.find({}, function(err, users) {
        res.render('bars/index', {
            users,
            user: req.user,
            name: req.query.name
        });
    });
    // Bar.find({}, function(err, bars) {
    //     res.render('bars/index', {
    //         bars,
    //     })
    // })
}

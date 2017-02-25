var m = require('mithril');

var Comments = require('./views/comments')
var Home = require('./views/home');
var Contact = require('./views/contact');
var Referrals = require('./views/referrals');
var NavBar = require('./utilities/navbar');

m.route(document.body, '/home', {
    '/comments': Comments,
    '/home': Home,
    '/contact': Contact,
    '/referrals': Referrals,
    '/navbar': NavBar
});
var m = require('mithril');
var Comment = require('../models/comment');

module.exports = {
    oninit: Comment.loadList,
    view: function(){
        return m('.beer-list', Comment.list.map(function(beer){
            return m('.beer-list-name', beer.name)
        }));
    }
}
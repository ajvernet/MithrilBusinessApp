var m = require('mithril');
var Comment = require('../models/comment');

module.exports = {
    oninit: Comment.loadList,
    view: function(){
        return m("ul", {class:"w3-ul w3-hoverable w3-sidenav"},Comment.list.map(function(job){
                    return m("li", {class: "w3-hover-green"}, job.name)
                 })
    )}
}


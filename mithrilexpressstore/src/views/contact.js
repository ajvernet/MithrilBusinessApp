var m = require('mithril');
var SiteNav = require('./sitenav')
var label = require('../utilities/label')
var input = require('../utilities/input')

module.exports = {
    
    view: function(){
        return m("main", {class: "w3-animate-opacity"},[
                 m(SiteNav),
                m("div", {class: "w3-margin-left"},
                  [m("h1","Contact us for a free estimate!"), 
                   m(label, 'First Name'),
                   m(input, {class: "w3-hover-red"})
            ])
        ])
            
    }
}
        

    


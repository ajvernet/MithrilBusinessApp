var m = require('mithril');
var SiteNav = require('./sitenav')

module.exports = {
    view: function() {
        return m("main", 
            
               {class: "w3-animate-opacity"},[
                    m(SiteNav),
                
                
            m("h1", {class: "w3-margin-left"},"See what our customers have to say about us.")]

    )}
}
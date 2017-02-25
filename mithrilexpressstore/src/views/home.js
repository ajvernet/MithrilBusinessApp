var m = require('mithril');
var SiteNav = require('./sitenav');
var Jobs = require('./jobs');
 

module.exports = {

    view: function(){
  
        return m("main", {class: "w3-animate-opacity"},[
                 m(SiteNav),
            m("h1", {class: "w3-margin-left"}, "Welcome to our website!"),
            m("div", {class:"w3-container"}, m(Jobs))
            
    ])}
}

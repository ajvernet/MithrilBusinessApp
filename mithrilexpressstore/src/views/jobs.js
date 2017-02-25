var m = require('mithril');
var JobList = require('./services.js');

var intro = "We do the following jobs: ";

module.exports = {
    view: function(){
        return m("div", [
            m("h2", intro),
            m(JobList)
    ])}
}
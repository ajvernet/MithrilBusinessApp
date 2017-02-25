var m = require('mithril');

var state = {
    value: "",
    setValue: function(v) {
        state.value = v

}

module.exports = {
    
    view: function(){
        return m("input",{
            oninput: m.withAttr("value", state.setValue),
            value: state.value})
    }
}
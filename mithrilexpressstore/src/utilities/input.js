var m = require('mithril');


var state = {
    value: "",
    setValue: function(v) {
        state.value = v
    }
}

module.exports = {
 
    view: function(vnode){
        return m("input",{
            class: vnode.attrs.class,
            oninput: m.withAttr("value", state.setValue),
            value: state.value})
    }
}
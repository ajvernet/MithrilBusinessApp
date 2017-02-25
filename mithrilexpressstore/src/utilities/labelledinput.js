var m = require('mithril');

var state = {
    value: "",
    setValue: function(v) {
        state.value = v
    }
}

module.exports = {
 
    view: function(vnode){
        return m("label", vnode.attrs, [vnode.children, ': ',            
            m("input", {
            oninput: m.withAttr("value", state.setValue),
            value: state.value})])
    }
}
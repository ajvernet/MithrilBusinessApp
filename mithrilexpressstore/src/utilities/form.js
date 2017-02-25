var m = require('mithril');

module.exports = {
    
    view: function(vnode){
        return m("div", vnode.attrs, [
            m("input", vnode.children)
        ])
    }
}
var m = require('mithril')

module.exports = {
    view: function(vnode){
        return m("button", vnode.attrs, [
            "Click to", vnode.children
        ])
    }
}


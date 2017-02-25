var m = require('mithril');

module.exports = {
    
    view: function(vnode){
        return m("label", vnode.attrs, [vnode.children, ': '])
    }
}

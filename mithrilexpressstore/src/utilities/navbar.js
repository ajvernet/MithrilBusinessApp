var m = require('mithril');

module.exports = {
    
        view: function(vnode){
            return m("ul", vnode.attrs, [
                m("li", vnode.children)
            ])
        }
}
        

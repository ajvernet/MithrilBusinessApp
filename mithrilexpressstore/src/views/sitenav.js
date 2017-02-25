var m = require('mithril');

var NavBar = require('../utilities/navbar');

module.exports = {
    view: function(){
        return m(NavBar, {class: "w3-navbar w3-black "},[
            m("a", {href: "#!/home"}, "Home Page"),
            m("a", {href: "#!/contact"}, "Contact Us"),
            m("a", {href: "#!/referrals"}, "Testimonials")    
        ])
    }
}
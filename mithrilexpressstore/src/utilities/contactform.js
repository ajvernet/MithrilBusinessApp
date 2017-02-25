var m = require('mithril');



var ContactForm = {
    

    
        view: function() {
            return m("h2", {class: "w3-xlarge w3-margin-top"},"Please fill out the following fields:",
                m("br"),
                  m("label", {for: "firstName"}, ["First Name: ",
                    m("input[type=text]", {id: "firstName", value: "somevalue"})],
                  m("input[type=button]", {value: "submit", onclick:"console.log('yay')"})))
        },
    
        setName: function(){
            ContactForm.inputName = document.getElementById('firstName').value;
        },

        sendName: function(){

                ContactForm.setName();

                console.log('function reached')
                return m.request({
                    method: 'POST',
                    url: 'http://localhost:3000/addcustomer',
                    data: {name: inputName}
                }).then(function(response){
                    console.log(response);
            })}
}


module.exports = ContactForm
                
//        return m("h2", {class: "w3-xlarge w3-margin-top"},"Please fill out the following fields:",
//            m("form", {class: "w3-large"},
//              m("label", {for: "firstName"}, "First Name: "),
//                m("input[type=text]", {id: "firstName"}),
//              m("input[type=submit]", {value: "submit"})
//             ))
//              m("label", "Last Name: ",
//                m("input[type=text]"))
//    


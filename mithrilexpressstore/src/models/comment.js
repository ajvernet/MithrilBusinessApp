var m = require('mithril');

var Comment = {
    list: [],
    loadList: function(){
        return m.request({
            method: "GET",
            url: "http://localhost:3000/all",
        }).then(function(result){
            Comment.list = result.jobs;
            console.log(result.jobs)
        })
        
    } 
}


module.exports = Comment;
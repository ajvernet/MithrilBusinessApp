var mongoose = require('mongoose');

var productSchema = mongoose.Schema({
    name: String,
    priceInDollars: Number,
    numPurchases: Number
});

productSchema.methods.getDisplayPrice = function(){
    return '$' + this.priceInDollars;
}

var Product = mongoose.model('Product', productSchema);
module.exports = Product;


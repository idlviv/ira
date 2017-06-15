const mongoose = require('../libs/mongoose');

const ProductSchema = mongoose.Schema({
  itemNumber: {
    type: String,
    unique: true,
    required: true
  },
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
  },
  mainImgSrc: {
    type: String
  },
});

let ProductModel = mongoose.model('products', ProductSchema);
module.exports = ProductModel;

module.exports.getProducts = function() {
  return new Promise((resolve, reject) => {
    ProductModel.find()
      .then((products) => resolve(products))
      .catch((err) => reject(err));
  });
};

module.exports.addProduct = function(newProduct) {
  return new Promise(function(resolve, reject) {
        newProduct.save()
          .then(() => resolve({success: true, msg: 'Product added'}))
          .catch(() => reject({success: false, msg: 'Failed to add product'}));
      })
      .catch((error) => {throw error;});
};

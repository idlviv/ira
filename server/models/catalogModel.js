const mongoose = require('../libs/mongoose');

const CatalogSchema = mongoose.Schema({
    category0: {
      type: String,
      unique: true,
      required: true
    },
    category1: {
      type: [],
      required: true
    },
    description: {
      type: String
    }
  });

let CatalogModel = mongoose.model('catalogs', CatalogSchema);
module.exports = CatalogModel;

module.exports.getCatalog = function() {
  return new Promise((resolve, reject) => {
    CatalogModel.find()
      .then((products) => resolve(products))
      .catch((err) => reject(err));
  });
};

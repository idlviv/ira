let express = require('express');
let router = express.Router();
let passport = require('passport');
let jwt = require('jsonwebtoken');

let ProductModel = require('../models/productModel');
const config = require('../config');

router.get(
  '/getProducts', (req, res, next) => {
    ProductModel.getProducts()
      .then((products) => {
        res.json(products);
      })
      .catch((error) => {
        console.log(error);
      });
  });

router.post(
  '/addProduct', passport.authenticate('jwt', {session: false}),
    (req, res, next) => {
      console.log('Server - ProductModel - authenticated');
    let newProduct = new ProductModel({
        itemNumber: req.body.itemNumber,
        name: req.body.name,
        price: req.body.price,
        mainImgSrc: req.body.mainImgSrc,
      });
      // повертає обєкт (success..)
     ProductModel.addProduct(newProduct)
      .then((result) => res.json(result))
      .catch((error) => res.json(error));
    });

router.put(
  '/editProduct', passport.authenticate('jwt', {session: false}),
  (req, res, next) => {
    console.log('Server - ProductModel - authenticated');

    let editedProduct = {};
    editedProduct.itemNumber = req.body.itemNumber;
    editedProduct.name = req.body.name;
    editedProduct.price = req.body.price;
    editedProduct.mainImgSrc = req.body.mainImgSrc;

    // повертає обєкт (success..)
    console.log('edited product' + editedProduct);
    ProductModel.editProduct(req.body._id, editedProduct)
      .then((result) => res.json(result))
      .catch((error) => res.json(error));
  });

module.exports = router;

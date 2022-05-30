// const fs = require('fs');
// const path = require('path');

// const p = path.join(
//     path.dirname(process.mainModule.filename),
//     'data',
//     'cart.json'
//   );

// module.exports = class Cart {
//    static addProduct(id, productPrice) {
//     // Fetch the prev cart
//     fs.readFile(p, (err, fileContent) => {
//         let cart = { products: [], totalPrice: 0};
//         if (!err) {
//             cart = JSON.parse(fileContent);
//         }
//         // analyse the cart -> find existing product
//         const existingProductIndex = cart.products.findIndex(prod => prod.id === id);
//         const existingProduct = cart.products[existingProductIndex];
//         let updatedProduct;
//         // add new product/ increase quantity
//         if (existingProduct) {
//             updatedProduct = {...existingProduct};
//             updatedProduct.qty = updatedProduct.qty + 1;
//             cart.products = [...cart.products];
//             cart.products[existingProductIndex] = updatedProduct;
//         } else {
//             updatedProduct = { id: id, qty: 1};
//             cart.products = [...cart.products, updatedProduct];
//         }
//         cart.totalPrice = cart.totalPrice + +productPrice;
//         fs.writeFile(p, JSON.stringify(cart), err => {
//             console.log(err);
//         });
//     });
//    }

//    static deleteProduct(id, productPrice) {
       
//    }
// }

const Sequelize = require('sequelize');

const sequelize = require('../util/databse');

const Cart = sequelize.define('cart', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    }
});

module.exports = Cart;
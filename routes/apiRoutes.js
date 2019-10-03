const router = require('express').Router();
const mysql = require('mysql');
require('dotenv').config();

//creating connection to mysql database
const con = mysql.createConnection({
    database: process.env.DB,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD
})

//responding with products from the database
router.get('/products', (req, res) => {
    con.query('SELECT * FROM products INNER JOIN prices ON products.product_id = prices.product_id', (err, result) => {
      if(err) throw err
      res.send(result);
    })
  })
  
  router.get('/productfilter', (req, res) => {
    let {category} = req.query;
   
    con.query('SELECT * FROM products INNER JOIN prices ON products.product_id = prices.product_id WHERE category LIKE ?', [category], (err, result) => {
      if(category === "all"){
        return res.redirect('/api/products')
      } 
      res.send(result);
    })
  })


  //responding with contacts from the database
  router.get('/contacts', (req, res) => {
    con.query('SELECT * FROM contacts INNER JOIN products ON contacts.product_id = products.product_id ORDER BY contact_id DESC', (err, result) => {
      if(err) throw err;
      res.send(result);
    })
  })

  

  module.exports = router;
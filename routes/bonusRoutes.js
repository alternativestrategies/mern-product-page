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

//BONUS ENDPOINTS

router.all('/contacts/:id', (req, res)=> {
    let id = req.params.id;
    con.query('SELECT * FROM contacts WHERE contact_id LIKE ?', [id], (err, result) => {
      if(err) {
        throw err;
      } else if(!result.length){
        res.sendStatus(404)
      } else {
        res.send(result);
      }
    })
  })

  //responding with contacts from the database
  router.get('/contacts/:id', (req, res) => {
    let id = req.params.id;
    con.query('SELECT * FROM contacts WHERE contact_id LIKE ?', [id], (err, result) => {
      if(err) {
        return res.json({"Error" : true, "Message" : "Error executing MySQL query"});
    }
      res.send(result);
    })
  })

  //PRODUCT INVOICE API ENDPOINT
  router.get('/productinvoice/:productid/:quant', (req, res) => {
    let item = req.params.productid;
	  let quantity = req.params.quant;
    con.query('SELECT product_name, ? AS quantity, FORMAT(((price * ?)) + (price * 0.08), 2) AS total_price FROM products INNER JOIN prices ON products.product_id = prices.product_id WHERE products.product_id = ?', [quantity, quantity, item], (err, result) => {
      if(err) throw err;
      res.send(result);
    })
  })

  //creates new contact within contact table
  router.post('/newcontacts', (req, res) => {
      con.query('INSERT INTO contacts SET ?', req.body, (err, result) => {
          if(err) throw err;
          console.log(`User added with ID: ${result.insertId}`)
      })
  })


  //update information based on id
  router.put('/updatecontact/:id', (req, res) => {
    let id = req.params.id;
    con.query('UPDATE contacts SET ? WHERE contact_id = ?', [req.body, id], (err, result) => {
      if(err) {
          return res.json({"Error" : true, "Message" : "Error executing MySQL query"});
      }
      res.json({"Error" : false, "Message" : "Updated contact of user with id  "+ id});
  
    })
})

//deletes contact based on id
router.delete('/deletecontact/:id', (req, res) => {
    let id = req.params.id;
    con.query('DELETE FROM contacts WHERE contact_id = ?', [id], (err, result) => {
      if(err) {
          return res.json({"Error" : true, "Message" : "Error executing MySQL query"});
      }
      res.json({"Error" : false, "Message" : "Deleted the user with id "+ id});
  
    })
})


  

module.exports = router;
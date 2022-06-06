const {Pool} = require('pg');
const express = require('express');
const bodyParser = require('body-parser');
const https = require('https');

// DATABASE CONFIGURATION:
const config = {
  user: 'postgres',
  host: 'localhost',
  password: 'pg123',
  database: 'library'
}
// DATABASE CONNECTION;

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));


app.post("/", (req, res)=>{
  const pool = new Pool(config);
  const user = req.body.user;
  const password = req.body.password;
  const insertUser = () => {
    const values = new Array();
    values.push(user);
    values.push(password);
    const queryText = 'insert into users VALUES($1, $2)';
    try{
      const respuesta =  pool.query(queryText, values);
      res.write('Se ha añadido satisfactoriamente el usuario.')
      pool.end()
      res.send();
    }catch(err){
      console.log(err);
    }
  }
  insertUser(user, password);
});
app.get("/", (req, res)=>{
  res.sendFile(__dirname + "/index.html");
});

app.listen(3000, ()=>{
  console.log("Server is running on port 3000")
});


//
//const getBooks = async() => {
//  try{
//    const res = await pool.query('select * from books');
//    console.log(res.rows);
//    pool.end();
//  }catch(err){
//    console.log(err);
//  }
//};

//getBooks();
//insertUser();


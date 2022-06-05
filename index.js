const {Pool} = require('pg');

const config = {
  user: 'postgres',
  host: 'localhost',
  password: 'pg123',
  database: 'library'
}

const pool = new Pool(config);

const getBooks = async() => {
  const res = await pool.query('select * from books');
  console.log(res.rows);
  pool.end();
};

getBooks();

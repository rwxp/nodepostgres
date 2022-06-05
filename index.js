const {Pool} = require('pg');

const config = {
  user: 'postgres',
  host: 'localhost',
  password: 'pg123',
  database: 'library'
}

const pool = new Pool(config);

const getBooks = async() => {
  try{
    const res = await pool.query('select * from student');
    console.log(res.rows);
    pool.end();
  }catch(err){
    console.log(err);
  }
};
const insertUser = async() => {
  const values = ['john', 'john234'];
  const queryText = 'insert into users VALUES($1, $2)';
  try{
    const res = await pool.query(queryText, values);
    console.log('Se ha añadido satisfactoriamente el usuario.')
    pool.end()
  }catch(err){
    console.log(err);
  }
}
getBooks();
insertUser();

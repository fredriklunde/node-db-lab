const mysql = require('mysql2');
// create a new MySQL connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'test_db'
});

// Connect to the MySQL server
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL');

  // Create the Customers table
  connection.query(`CREATE TABLE Customers (
    customer_id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(255),
    last_name VARCHAR(255),
    email VARCHAR(255),
    password VARCHAR(255),
    address VARCHAR(255),
    phone_number VARCHAR(20)
  )`, (err) => {
    if (err) {
      console.error('Error creating Customers table:', err);
    } else {
      console.log('Customers table created');
    }
  });

  // Create the Categories table
  connection.query(`CREATE TABLE Categories (
    category_id INT AUTO_INCREMENT PRIMARY KEY,
    category_name VARCHAR(255)
  )`, (err) => {
    if (err) {
      console.error('Error creating Categories table:', err);
    } else {
      console.log('Categories table created');
    }
  });

  // Close the MySQL connection when done
  connection.end((err) => {
    if (err) {
      console.error('Error closing MySQL connection:', err);
    } else {
      console.log('Connection closed.');
    }
  });
});

const inquirer = require ("inquirer")
const mysql = require('mysql2')

// Connect to database
const db = mysql.createConnection(
    {
      host: 'localhost',
      // MySQL username,
      user: 'root',
      // TODO: Add MySQL password here
      password: 'rootroot',
      database: 'employees'
    },
    console.log(`Connected to the employees database.:)`)
  );

  function  policiesAndPolitics () {
return inquirer

  .prompt([
    /* Pass your questions in here */

    {
        type: 'list',
    name: 'options',
    message: 'What would you like to do?',
    choices: [
        'View all departments',
        'View all Roles',
        'View all employees',
        'Add a department',
        'Add a role',
        'Add an employee',
        'Update an employee role',
        'stop while ahead']
    }])
  .then((answers) => {
    // Use user feedback for... whatever!!
    if (answers.options === 'View all departments') {
        console.log ("testTest123:)")
        showMeWhatYouGot();
        policiesAndPolitics();
    }
    if (answers.options === 'View all Roles') {
        console.log ("testTest123:)")
    }
    if (answers.options === 'View all employees') {
        console.log ("testTest123:)")
    }
    if (answers.options === 'Add a department') {
        console.log ("testTest123:)")
    }
    if (answers.options === 'Add a role') {
        console.log ("testTest123:)")
    }
    if (answers.options === 'Add an employee') {
        console.log ("testTest123:)")
    }
    if (answers.options === 'Update an employee') {
        console.log ("testTest123:)")
    }
    if (answers.options === 'stop while ahead') {
        console.log ("see you later kid:(")
        goodByeEverybody();
    }
  })}
  // .catch((error) => {
  //   if (error.isTtyError) 
  // }
policiesAndPolitics();

// this is the view department function
const showMeWhatYouGot = () =>
    db.query("select * from department",function(error, results){
      if (error) throw error;
      console.table(results)
    } )

// this is the view employee function





// this is the view  role function

















// this is the good bye everybody function....see you later kid...
const goodByeEverybody = () =>{
  process.exit()
}
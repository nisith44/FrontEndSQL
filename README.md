# FrontEndSQL
How To Run SQL Query in Frontend (React, Angular, Vue, Ionic). You can just run the SQL queries in front end by pass the SQL query in the API request body.

This is light weight Node.js Express backend application (2mb) you can pass the sql query in the request body

## How it works
### How to run SQL query in React application

```js
const axios = require('axios');

axios.post('http://localhost:3000/sql/select', {
    sql: 'SELECT * FROM users;',
})
.then(function (response) {
    console.log(response);
})
```

### How to run SQL query in Angular or Ionic application
```js
import {HttpClient} from "@angular/common/http";

constructor(public httpClient:HttpClient){}

this.httpClient.post('http://localhost:3000/sql/select',{
    sql:'SELECT * FROM users;'
})
.subscribe((response)=>{
    console.log(response);
})
```

## How to use (Getting Started)
### 1. Clone this project
```https://github.com/nisith44/FrontEndSQL.git```

### 2. Change the database.js file with your mysql database details
```js
const mysql = require('mysql');

const pool= mysql.createPool({
    connectionLimit:10,
    host:'localhost',
    port:'3306',
    user:'root',
    password:'',
    database:'iadmin'

});

module.exports = pool;
```

### 3.Run the Node project
``` npm start ```

# API Enpoints
### Run SQL SELECT Queries in Frontend
``` http://localhost:3000/sql/select ```

### Run SQL INSERT Queries in Frontend
``` http://localhost:3000/sql/insert ```

### Run SQL UPDATE Queries in Frontend
``` http://localhost:3000/sql/update ```

### Run SQL DELETE Queries in Frontend
``` http://localhost:3000/sql/delete ```
At one time can only delete one record because the security reason

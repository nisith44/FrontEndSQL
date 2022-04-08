# FrontEndSQL
How To Run SQL Query in Frontend (React, Angular, Vue, Ionic). You can just run the SQL queries in front end by pass the SQL query in the API request body.

This is light weight Node.js Express backend application (2mb) you can pass the sql query in the request body

## How it works
### How to run SQL query in React application

```
const axios = require('axios');

axios.post('http://localhost:3000/sql/select', {
    sql: 'SELECT * FROM users;',
})
.then(function (response) {
    console.log(response);
})
```

### How to run SQL query in Angular or Ionic application
```
import {HttpClient} from "@angular/common/http";

constructor(public httpClient:HttpClient){}

this.httpClient.post('http://localhost:3000/sql/select',{
    sql:'SELECT * FROM users;'
})
.subscribe((response)=>{
    console.log(response);
})
```

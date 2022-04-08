const express = require('express');
const pool = require('../database.js');

const router = express.Router();

//run SQL function
function runSQL(sql,res){
    pool.query(sql, function (error, results, fields) {
        if (error) {
            console.log(error);
            res.json({
                status:'ERROR',
                error: error
            });
        }
        if (results) {
            res.json({
                status:'OK',
                output: results
            });
        }
    });
}

//show security issue error msg
function showSecurityError(res){
    res.json({
        status:'ERROR',
        error:{sqlMessage:"Cannot run this query because the security issue"} 
    });
}


//get data from tables
router.post('/select', (req, res) => {
    if(req.body.sql.substring(0,6).toLowerCase()=='select'){
        runSQL(req.body.sql,res)
    }else{
        showSecurityError(res)
    }
})


//insert data into tables
router.post('/insert', (req, res) => {
    if(req.body.sql.substring(0,6).toLowerCase()=='insert'){
        runSQL(req.body.sql,res)
    }else{
        showSecurityError(res)
    }
})


//update data into tables
router.post('/update', (req, res) => {
    if(req.body.sql.substring(0,6).toLowerCase()=='update'){
        runSQL(req.body.sql,res)
    }else{
        showSecurityError(res)
    }
})


//delete data into tables
router.post('/delete', (req, res) => {
    if(req.body.sql.substring(0,6).toLowerCase()=='delete'){
        //can delete only one row because the security 
        let sql=req.body.sql.substring(0,req.body.sql.length-1)+" LIMIT 1;"
        runSQL(sql,res)
    }else{
        showSecurityError(res)
    }
})


module.exports = router;
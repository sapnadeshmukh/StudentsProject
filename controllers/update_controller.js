const connection=require("../database/connection")
const express=require('express')
const app = express()
app.use(express.json())

module.exports.update_data=(req, res) => {

    var data=req.params.id
    let sql="UPDATE Students SET name='" +req.body.name+ " ',gender='"+req.body.gender+ " ',email='"+req.body.email+" ',DOB='"+req.body.DOB+" ',skill='"+req.body.skill+"'WHERE id="+ data;

    let quary = connection.query(sql,(err,result)=>{
        if(err) throw err
        console.log("updated successfully!!")
        res.send("updated suceefully!!!")
    })
}
var sql="create table if not exists Students name varchar(50) NOT NULL,email varchar(50) NOT NULL UNIQUE,DOB date(50),gender varchar(50),skill varchar(50))";

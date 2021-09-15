const connection=require("../database/connection")
const express=require('express')
const app = express()
app.use(express.json())

module.exports.update_data=(req, res) => {

    var data=req.params.id
    console.log(data)
    let sql="UPDATE Students SET name='" +req.body.name+ " ',gender='"+req.body.gender+ "'WHERE id="+ data;

    let quary = connection.query(sql,(err,result)=>{
        if(err) throw err
        console.log("updated successfully!!")
        res.send("updated suceefully!!!")
    })
}
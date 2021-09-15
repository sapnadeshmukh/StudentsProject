const connection=require("../database/connection")

module.exports.get_data=(req,res)=> {
    var sql = "SELECT * FROM Students";
    var query = connection.query(sql,(err,data)=>{
        if(err) throw err;
        console.log(data)
        res.send(data)
    })
}
const connection=require("../database/connection")

module.exports.delete_data=(req,res) =>{
    var sql = "DELETE FROM Students WHERE id =" +req.params.id;

    var quary = connection.query(sql,(err,result)=>{
        if(err) throw err
        console.log("Data has deleted!!")
        res.send("Data has deleted!!")
    });
}
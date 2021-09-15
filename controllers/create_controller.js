const connection=require("../database/connection")


module.exports.post_data=(req, res) => {
    let data={
        name:req.body.name,
        email:req.body.email,
        DOB:req.body.DOB,
        gender:req.body.gender,
        skill:req.body.skill



    };
        var sql="create table if not exists Students name varchar(50) NOT NULL,email varchar(50) NOT NULL UNIQUE,DOB date(50),gender varchar(50),skill varchar(50))";
        var sql = "INSERT INTO Students SET ?";
        let query=connection.query(sql,data,(err,result)=>{
            if(err) throw err;
            console.log("Data has insertd!!!")
            res.send("Data has inserted!!!")
            
        })
}
module.exports = (req,res)=>{
	const conn = require('./conn');
    const data = 'insert into `users` (`username`,`password`,`phone`) values ("'+req.query.username+'","'+ req.query.password +'","'+ req.query.phone +'");';
    conn.query(data,function(err,result,files){
       if(err == null){
            res.json({
               error:0,
               message:'注册成功',
               data:null,
               errorInfo:null
            })
       }else{
            res.json({
                error:1,
                message:'注册失败',
                data:null,
                errorInfo:err
            })
       }
   }) 
}
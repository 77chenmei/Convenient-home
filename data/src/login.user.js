module.exports = (req,res)=>{
	const conn = require('./conn.js');
	var data = 'select * from `users` where `username` = "'+ req.body.username+'";';
	conn.query(data,(err,result)=>{
		if(err == null){
			res.json({
				error:0,
				data:result,
				errorInfo:null
			})
		}else{
			res.json({
				error:1,
				data:null,
				errorInfo:err
			})
		}
	})
}
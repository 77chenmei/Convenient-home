module.exports = (req,res)=>{
	const conn = require('./conn.js');
	var data = 'select * from `users` where `phone` = '+req.query.phone+';';
	conn.query(data,(err,result)=>{
		res.json(result);
	})
}
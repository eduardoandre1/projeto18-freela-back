import bcrypt from "bcrypt";
import DB from "../../database/pg.js";
import {v4 as uuid} from "uuid";

async function sign_in(req,res){
	const {email , password } = req.body
	try{
		const select = `SELECT * FROM "Users" WHERE email = $1`
		const user = await DB.query(select,[email])
		if(user.rowCount === 0){
			return res.status(401).send('email dont finded in server')
		}
		const password_validate = bcrypt.compareSync(password,user.rows[0].password)
		if(password_validate === false){
			return res.status(401).send('wrong passwords')
		}
		const token = uuid()
		const date = new Date()
		console.log(user.rows[0].user_type)
		await DB.query(`INSERT INTO tokens (user_id,token,"create_in") VALUES ($1,$2,$3)`,[user.rows[0].id,token,date])
		return res.status(200).send({token:token})

	}catch(erro){return res.status(500).send(erro.message)}
}
export default sign_in
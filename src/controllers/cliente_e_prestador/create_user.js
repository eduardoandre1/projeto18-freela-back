import bcrypt from "bcrypt"
import DB from "../../database/pg.js"
export async function Create_profile(req,res){
	const {name, cpf_cnpj, email, password, cep, telephone} = req.body
	const time = new Date()
	const criptyPassword = bcrypt.hashSync(password,10)
	try{
		await DB.query(`INSERT INTO "Users" (name,cpf_cnpj,email,password,cep,telephone,create_in) VALUES ($1,$2,$3,$4,$5,$6,$7)`,[
			name, cpf_cnpj ,email,criptyPassword, cep,telephone,time
		])
		return res.sendStatus(201)
	}catch(err){return res.status(500).send(err.message)}
}
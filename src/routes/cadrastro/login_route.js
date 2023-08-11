import { Router } from "express";
import alredy_have_pg from "../../middlewares/already_have.js";
import sign_in from "../../controllers/cliente_e_prestador/login.js";
import { Create_profile } from "../../controllers/cliente_e_prestador/create_user.js";

const user = Router()
user.post('/sign_up',alredy_have_pg("Users","email","email"),alredy_have_pg("Users","cpf_cnpj","cpf_cnpj"),Create_profile)
user.post('/sign_in',sign_in)

export default user
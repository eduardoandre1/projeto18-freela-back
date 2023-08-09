import { Router } from "express";
import alredy_have_pg from "../../middlewares/alread_have";

const user = Router()
user.post('/cadastro/:id',alredy_have_pg())
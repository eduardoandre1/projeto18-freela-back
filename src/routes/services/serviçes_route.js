import { Router } from "express";
import tokenvalidade from "../../middlewares/token_validate";
import input_validate from "../../middlewares/input_validate";

const serviçe = Router()
serviçe.post("serviçe_create",tokenvalidade,input_validate())
serviçe.get("/serviçes_list",tokenvalidade)
serviçe.update("/serviçe_edit",tokenvalidade,input_validate())
serviçe.delete("/serviçe_del",tokenvalidade)
 
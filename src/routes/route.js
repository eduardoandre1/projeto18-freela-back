import { Router } from "express";
import user from "./cadrastro/login_route.js";

const router = Router()
router.use(user)
export default router


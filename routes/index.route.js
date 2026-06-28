import { Router } from "express";
import tareasRouter from "./tareas.route.js";
import usuariosRouter from "./usuarios.route.js";

const router = Router();
router.use("/tareas", tareasRouter);
router.use("/usuarios", usuariosRouter);
export default router;

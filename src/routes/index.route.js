import { Router } from "express";
import tareasRouter from "./tareas.route.js";


const router = Router();
router.use("/tareas", tareasRouter);

export default router;

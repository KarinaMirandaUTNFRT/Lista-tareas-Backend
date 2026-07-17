import { Router } from "express"; //
import {
  listarTareas,
  obtenerTareaId,
  crearTarea,
  editarTarea,
  editarParcialTarea,
  borrarTarea,
} from "../controllers/tarea.controllers.js";
import {
  validacionIDTarea,
  validacionTarea,
} from "../middlewares/temp.js";

const tareasRouter = Router(); //

tareasRouter
  .route("/")
  .get(listarTareas)
  .post(validacionTarea, crearTarea);

tareasRouter
  .route("/:id")
  .get(validacionIDTarea, obtenerTareaId)
  .put([validacionIDTarea, validacionTarea], editarTarea)
  .patch(validacionIDTarea, editarParcialTarea)
  .delete(validacionIDTarea, borrarTarea);

export default tareasRouter;

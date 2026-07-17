import { body, param } from "express-validator";
import resultadoValidacion from "./resultadoValidacion.js";

export const validacionTarea = [
  body("nombreTarea")
    .notEmpty()
    .withMessage("el nombre de la tarea es un dato obligatorio")
    .isString()
    .withMessage("El nombre de la tarea debe ser un string")
    .isLength({ min: 5, max: 100 })
    .withMessage(
      "La descripcion de la tarea debe tener entre 5 y 100 caracteres",
    ),
  body("fechaInicio")
    .notEmpty()
    .withMessage("La fecha es un dato obligatorio")
    .isString()
    .withMessage("La tarea debe estar ingresada de esta formato texto")
    .isDate({ format: "YYYY-MM-DD", strictMode: true })
    .withMessage(
      "La fecha debe tener el formato exacto: año-mes-día (ej: 2026-06-28)",
    ),
 
      body("categoria")
    .isString()
    .withMessage("La categoria debe ser un string")
    .isIn(["Ventas", "Proveedores", "Marketing", "Sistemas", "Atencion al Cliente"])
    .withMessage(
      "La categoria debe ser algunos de los siguientes valores: 'Ventas', 'Proveedores', 'Marketing, 'Sistemas', 'Atencion al Cliente',"
    ),
    body("prioridad")
    .notEmpty()
    .withMessage("La prioridad es un dato obligatorio")
    .isString()
    .withMessage("Debe ingresar una prioridad con un string")
    .isIn(["baja", "media", "alta"])
    .withMessage(
      "la prioridad debe ser alguno de los siguientes valores:'baja','media', 'alta' ",
    ),
  body("descripcion")
    .isString()
    .withMessage("La descripción debe ser un string")
    .isLength({ min: 10, max: 500 })
    .withMessage("La descripción debe contener entre 10 y 500 caracteres"),

  resultadoValidacion,
];

export const validacionIDTarea = [
  param("id")
    .isMongoId()
    .withMessage("Este formato de ID no corresponde a un formato de "),
  resultadoValidacion,
];

import Tarea from "../models/Tarea.js";

export const listarTareas = async (req, res) => {
  try {
    const tareas = await Tarea.find();
    res.status(200).json(tareas);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: "Ocurrió un error al listar los tareas" });
  }
};
export const obtenerTareaId = async (req, res) => {
  try {
    const tareaBuscado = await Tarea.findById(req.params.id);
    if (!tareaBuscado) {
      return res.status(404).json({ mensaje: "No se encontró el tarea buscado" });
    }
    res.status(200).json(tareaBuscado);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: "Ocurrió un error al buscar el tarea por ID" });
  }
};


export const crearTarea = async (req, res) => {
  try {
    // Verificamos si el email ya existe antes de intentar guardarlo para evitar el error de Mongoose
    const emailExistente = await Tarea.findOne({ email: req.body.email });
    if (emailExistente) {
      return res.status(400).json({ mensaje: "Este correo electrónico ya está registrado" });
    }

    const nuevaTarea = new Tarea(req.body);
    await nuevaTarea.save();
    res.status(201).json({
      mensaje: "El tarea fue creado con éxito",
      nuevaTarea
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: "Ocurrió un error al crear el tarea" });
  }
};


export const editarTarea = async (req, res) => {
  try {
    const tareaActualizado = await Tarea.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!tareaActualizado) {
      return res.status(404).json({ mensaje: "No se encontró el tarea para editar" });
    }
    res.status(200).json({
      mensaje: "El tarea fue modificado con éxito",
      tareaActualizado
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: "Ocurrió un error al intentar editar el tarea" });
  }
};


export const borrarTarea = async (req, res) => {
  try {
    const tareaEliminado = await Tarea.findByIdAndDelete(req.params.id);
    if (!tareaEliminado) {
      return res.status(404).json({ mensaje: "No se encontró el tarea que querés borrar" });
    }
    res.status(200).json({
      mensaje: "El tarea fue eliminado con éxito",
      tareaEliminado
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: "Ocurrió un error al intentar borrar el tarea" });
  }
};
export const editarParcialTarea = async (req, res) => {
  try {
    
    const tareaActualizado = await Tarea.findByIdAndUpdate(
      req.params.id,
      { $set: req.body }, // El operador $set de Mongoose asegura que solo se cambie lo enviado
      { new: true, runValidators: true } // runValidators hace que respete el enum y reglas del Schema
    );

    if (!tareaActualizado) {
      return res.status(404).json({ mensaje: "No se encontró el tarea que querés editar" });
    }

    res.status(200).json({
      mensaje: "Tarea actualizado correctamente",
      tareaActualizado
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: "Ocurrió un error al intentar actualizar el tarea" });
  }
};
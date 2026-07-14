import Tarea from "../models/Tareas.js";
export const prueba = (req, res) => {
  res.json("hasta luego ultima prueba");
};
export const obtenerTareaId = async (req, res) => {
  try {
    console.log(req.params.id);
    const tareaBuscada = await Tarea.findById(req.params.id);
        if (!tareaBuscada) {
      return res
        .status(404)
        .json({ mensaje: "no se encontro el tarea por id" });
    }
    res.status(200).json(tareaBuscada);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: "ocurrio un error al buscar un tarea por id" });
  }
};
export const listarTareas = async (req, res) => {
  try {
    const tareas = await Tarea.find();
    res.status(200).json(tareas);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ mensaje: "ocurrio un error al listar los tareas" });
  }
};
export const crearTarea = async (req, res) => {
  try {
    const nuevoTarea = new Tarea(req.body);
    await nuevoTarea.save();
    res
      .status(201)
      .json({ mensaje: "El tarea fue creado con éxito", nuevoTarea });
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: "Ocurrió un error al crear el tarea" });
  }
};
export const editarTarea = async (req, res) => {
  try {
    // 1. Buscamos por el ID que viene en la URL y le pasamos los datos nuevos del req.body
    // { new: true } sirve para que MongoDB nos devuelva el documento YA modificado
    const tareaActualizado = await Tarea.findByIdAndUpdate(req.params.id, req.body, { new: true });

    // 2. Si el ID no existía en la base de datos, avisamos
    if (!tareaActualizado) {
      return res.status(404).json({ mensaje: "No se encontró el tarea para editar" });
    }

    // 3. Si todo salió bien, respondemos con éxito y el objeto editado
    res.status(200).json({
      mensaje: "El tarea fue editado con éxito",
      tareaActualizado
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: "Ocurrió un error al intentar editar el tarea" });
  }
};
export const editarParcialTarea = async (req, res) => {
  try {
    // Mongoose es inteligente: si en req.body solo viene el precio, solo actualiza el precio
    const tareaActualizado = await Tarea.findByIdAndUpdate(
      req.params.id, 
      req.body, 
      { new: true } // Para que devuelva el objeto ya cambiado
    );

    if (!tareaActualizado) {
      return res.status(404).json({ mensaje: "No se encontró el tarea" });
    }

    res.status(200).json({
      mensaje: "Tarea actualizado parcialmente con éxito",
      tareaActualizado
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: "Ocurrió un error al aplicar el PATCH" });
  }
};
export const borrarTarea = async (req, res) => {
  try {
    // Buscamos por el ID de la URL y lo eliminamos en el acto
    const tareaEliminado = await Tarea.findByIdAndDelete(req.params.id);

    // Si el ID no existía en la base de datos, avisamos
    if (!tareaEliminado) {
      return res.status(404).json({ mensaje: "No se encontró el tarea que querés borrar" });
    }

    // Si todo salió bien, respondemos con éxito
    res.status(200).json({
      mensaje: "El tarea fue eliminado con éxito",
      tareaEliminado // Opcional: devolvemos el objeto que se borró
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: "Ocurrió un error al intentar borrar el tarea" });
  }
};
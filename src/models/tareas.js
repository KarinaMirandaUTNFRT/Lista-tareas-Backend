import mongoose, { Schema } from "mongoose";
const tareaSchema = new Schema(
  {
    //propiedadd del objeto tarea

    nombreTarea: {
      type: String,
      required: [true, "El nombre de la tarea es obligatorio."],
      minlength: 5,
      maxlength: 100,
      trim: true,
    },
    fechaInicio: {
      type: Date,
      required: [true, "La fecha de inicio es obligatoria."],
      validate: {
        validator: function (valor) {
          return valor >= new Date();
        },
        message: "La fecha de inicio no puede ser una fecha pasada.",
      },
    },
    
    categoria: {
    type: String,
    required: [true, "La categoría es obligatoria."],
    enum: ["Ventas", "Proveedores", "Marketing", "Sistemas", "Atencion al Cliente"],
  },

    prioridad: {
      type: String,
      required: [true, "La prioridad es obligatoria."],
      enum: ["baja", "media", "alta"],
    },
    descripcion: {
    type: String,
    required: [true, "La descripción detallada es obligatoria."],
    minlength: 10,
    maxlength: 500,
  },
  },
  {
    timestamp: true, //tengo la fecha y hora de creacion y actualizacion
  },
);
const Tarea = mongoose.model("tarea", tareaSchema);
export default Tarea;

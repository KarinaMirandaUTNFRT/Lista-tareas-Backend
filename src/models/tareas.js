import mongoose, { Schema } from "mongoose";
const tareaSchema = new Schema(
  {
    //propiedadd del objeto tarea

    descripcionTarea: {
      type: String,
      required: true,
      unique: true,
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

    prioridad: {
      type: String,
      required: true,
      enum: ["baja", "media", "alta"],
    },
    estado: {
      type: String,
      required: true,
      enum: ["terminado", "a terminar"],
    },
  },
  {
    timestamp: true, //tengo la fecha y hora de creacion y actualizacion
  },
);
const Tarea = mongoose.model("tarea", tareaSchema);
export default Tarea;

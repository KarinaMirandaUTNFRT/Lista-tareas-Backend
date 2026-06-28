import mongoose, {Schema} from "mongoose";
const tareaSchema = new Schema(
{
    //propiedadd del objeto tarea
    nombreTarea:{
type: String, 
required: true,
unique: true,
minlength:5,
maxlength:100,
trim: true,
    },
    precio:{
        type: Number,
        required: true,
        min: 50, 
    },
    imagen:{
        type: String,
        required: true,
        validate: (valor) =>  /^https:\/\/.+\.(jpg|jpeg|png|webp|avif|svg)$/.test(valor)
        
    },
    categoria:{
        type: String, 
        required: true,
        enum:['Desarrollo Web','backend & API', 'Consultoria']
    },
    descripcion: {
        type: String,
        minlength: 10,
        maxlength:500,
        required: true,
    },
},
{
    timestamp: true, //tengo la fecha y hora de creacion y actualizacion
}

);
const Tarea = mongoose.model('tarea', tareaSchema)
export default Tarea
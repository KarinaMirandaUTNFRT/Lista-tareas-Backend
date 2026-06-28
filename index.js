import express from 'express'
import cors from 'cors'
import {dirname} from'path';
import { fileURLToPath } from 'url';

const app = express()
const PORT = 3001
const __dirname = dirname (fileURLToPath(import.meta.url))



app.use(cors())
app.use(express.json())
app.listen(PORT, () => {
    console.info(`servidor activo en el puerto ${PORT}`);
});
app.get("/api/tarea", (req, res)=> {
console.log('Me llego solicitud nueva');
res.json ( 
    { 
    mensaje:"conexion creada",
    saludo:"Bienvenido a nuestro backend",
}
)

});
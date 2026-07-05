import express from 'express'
import cors from 'cors'
import {dirname} from'path';
import { fileURLToPath } from 'url';
import "./src/database/db.js"

const app = express()
const PORT = 3001

app.use(cors())
app.use(express.json())

const __dirname = dirname (fileURLToPath(import.meta.url))
console.log(__dirname + '/public')
app.use(express.static(__dirname + '/public'))

app.get("/api/tarea", (req, res)=> {
console.log('Me llego solicitud nuevaaaa');
res.json ( 
    { 
    mensaje:"conexion creada",
    saludo:"Bienvenido a nuestro backend",
})
});

app.listen(PORT, () => {
    console.info(`servidor activo en el puerto ${PORT}`);
});

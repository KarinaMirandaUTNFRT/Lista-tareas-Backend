import express from 'express'
import cors from 'cors'

const app = express()
const PORT = 3001

app.use(cors())
app.listen(PORT, () => {
    console.info(`servidor activo en el puerto ${PORT}`);
});
import express from 'express'
import cors from 'cors'

//IMPORT DE CONEXION A BD
import db from './database/db.js'
//import de enrutador
import blogRoutes from './routes/routes.js'

const app = express()

app.use(cors())
app.use(express.json())
app.use('/blogs', blogRoutes)

try {
	await db.authenticate()
	console.log('Conexión exitosa a la DB')
} catch (error) {
	console.log(`Error de conexión a la DB: ${error}`)
}

app.get('/', (req, res) => {
	res.send('HOLA MUNDO')
})

app.listen(8000, () => {
	console.log('Server IP running in http://localhost:8000/')
})

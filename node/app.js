import express from 'express'
import cors from 'cors'

//IMPORT DE CONEXION A BD
import db from './database/db.js'
//import de enrutador
import blogRoutes from './routes/routes.js'

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/blogs', blogRoutes)

app.listen(8000, () => {
	console.log('Server IP running in http://localhost:8000/')
})

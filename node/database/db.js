import mongoose from 'mongoose'
const url = 'mongodb://localhost:27017/mern'
mongoose.connect(url)

const db = mongoose.connection
db.on('open', () => {
	console.log('¡Conectado a la DB!')
})
db.on('error', () => {
	console.log('¡ERROR al conectar a la DB!')
})

export default db

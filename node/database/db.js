import { Sequelize } from 'sequelize'

const db = new Sequelize('database_app', 'root', 'Naranjit@s99', {
	host: 'localhost',
	dialect: 'mysql',
})

export default db

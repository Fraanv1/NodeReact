//Importamos el modelo
import BlogModel from '../models/BlogModel.js'

//** Métodos para el CRUD **/

//Mostrar todos los registros
export const getAllBlogs = async (req, res) => {
	try {
		const blogs = await BlogModel.find()
		res.status(200).json(blogs)
	} catch (error) {
		res.json({ message: error.message })
	}
}

//Mostrar un registro
export const getBlog = async (req, res) => {
	try {
		const id = req.params.id
		const blog = await BlogModel.findById({ _id: id }).then((blog) => {
			res.status(200).json(blog)
		})
	} catch (error) {
		res.json({ message: error.message })
	}
}
//Crear un registro
export const createBlog = async (req, res) => {
	try {
		await BlogModel.create(req.body)
		res.status(200).json({ message: '¡Blog creado correctamente!' })
	} catch (error) {
		res.json({ message: error.message })
	}
}
//Actualizar un registro
export const updateBlog = async (req, res) => {
	try {
		const id = req.params.id

		await BlogModel.updateOne({ _id: id }, req.body).then((res) => {})
		res.status(200).json({
			message: '¡Registro actualizado correctamente!',
		})
	} catch (error) {
		res.json({ message: error.message })
	}
}
//Eliminar un registro
export const deleteBlog = async (req, res) => {
	try {
		const id = req.params.id
		await BlogModel.deleteOne({
			_id: id,
		})
		res.status(200).json({
			message: '¡Registro eliminado correctamente!',
		})
	} catch (error) {
		res.json({ message: error.message })
	}
}

import {Pelicula} from '../models/Pelicula.js';

export const crearNuevaPelicula = async(req, res) => {
    try {
        const data = req.body
        const pelicula = await Pelicula.crear(data);
        
        res.status(201).json({
            message: 'pelicula Creada con éxito',
            status: 201,
            data: pelicula
        })
    } catch (error) {
        next(error)
    }
}
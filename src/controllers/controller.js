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
        res.status(500).json({
            message: 'Error at create data',
            status: 500,
            error
        })
    }
}
//agregar el condicional para que busque por titulo o director
export const obtenerTodasLasPeliculas = async(req, res) => {
    try {
        const data = await Pelicula.encontrarTodas();

        if(!data) throw new NotFoundError('No existen los datos', `No se encontraron los datos solictadoes en la ruta correspondiente`)

        res.status(200).json({
            message: 'Peliculas Encontrados!',
            status: 200,
            data
        })
    } catch (error) {
        res.status(500).json({
            message: "Error al obtener las peliculas",
            status: 500,
            error,
        });
    }
}

export const obtenerPeliculaPorId = async(req, res) => {
    try {
        const { id } = req.params;
        const data = await Pelicula.encontrarPorId(id);

        if (!data) throw new NotFoundError("La data se encuentra vacía", `No encontramos el id: ${id}`);

        res.status(200).json({
            messsage: 'Pelicula  Encontrada',
            status: 200,
            data
        })
    } catch (error) {
            res.status(500).json({
            message: "Error al obtener el usuario",
            status: 500,
            error,
        });
    }
}

export const actualizarPelicula = async(req, res) => {
    try {
        const { id } = req.params
        const dataPelicula = req.body

        const actualizarPelicula = await Pelicula.actualizar(id, dataPelicula)

        res.status(201).json({
            message: 'Pelicula Actualizada',
            status: 201,
            oldData: actualizarPelicula,
            newData: dataPelicula
        })
    } catch (error) {
            res.status(500).json({
            message: "Error al actualizar lapelicula",
            status: 500,
            error,
         });
    }}
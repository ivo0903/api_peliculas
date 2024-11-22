import {Router} from 'express';
import {crearNuevaPelicula,
    obtenerTodasLasPeliculas,
    obtenerPeliculaPorId,
    actualizarPelicula  } from '../controllers/controller.js'


const router = Router();

router.post('/pelicula', crearNuevaPelicula);
router.get('/pelicula/admin/all', obtenerTodasLasPeliculas )
router.get('/pelicula/admin/:id', obtenerPeliculaPorId)
router.put('/pelicula/:id',actualizarPelicula)


export default router;
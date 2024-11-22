import {v4 as uuidv4} from 'uuid';
import {createDataFile, 
        getAllData,
        getDataById,
        updateData} from '../utils/fileUtils.js'

export class Pelicula{
    #id
    #titulo
    #anio_estreno
    #director
    #duracion
    #activo

    constructor(titulo, anio_estreno,director, duracion, ){
        this.#id = uuidv4().slice(0,8);  //con slice(0,8) le indicamos cuantos caracteres queremos
        this.#titulo = titulo;
        this.#anio_estreno = anio_estreno;
        this.#director = director;
        this.#duracion = duracion;
        this.#activo = true;
    }

    get id(){
        return this.#id;
    }


    get titulo(){
        return this.#titulo;
    }

    get anio_estreno(){
        return this.#anio_estreno;
    }

    get director(){
        return this.#director;
    }

    get duracion(){
        return this.#duracion;
    }

    get activo(){
        return this.#activo;
    }

    setId(newId){
        this.#id = newId
    }

    setTitulo(newTitulo){
        this.#titulo= newTitulo
    }

    setAnio_estreno(newAnio_estreno){
        this.#anio_estreno= newAnio_estreno
    }

    setDirector(newDirector){
        this.#director= newDirector
    }

    setDuracion(newDuracion){
        this.#duracion= newDuracion
    }

    setActivo(newActivo){
        this.#activo= newActivo
    }

    getAllProperties(){
        return{
            id: this.#id,
            titulo: this.#titulo,
            anio_estreno: this.#anio_estreno,
            director: this.#director,
            duracion: this.#duracion,
            activo: this.#activo
        }
    }
    //crear archivo peliculas.json
    static async crear(data) {
        try {
            const { titulo, anio_estreno, director, duracion } = data;
            const pelicula = new Pelicula(titulo, anio_estreno, director, duracion);
            const peliculaObject = pelicula.getAllProperties();
    
            await createDataFile(peliculaObject, 'peliculas.json');
    
            return peliculaObject;
        } catch (error) {
            console.error(`Error en crear: ${error.message}`); // Muestra el error en la consola
            throw new Error(`Fallo al crear la nueva pelicula: ${error.message}`, error);
        }
    }
    //mostrar olistar todas las peliculas
    static async encontrarTodas() {
        try {
            const peliculas = await getAllData('peliculas.json')
            return peliculas
        } catch (error) {
            throw new Error('Error al obtener los datos de las peliculas', error)
        }
        }

//buscar pelicula por id
static async encontrarPorId(id) {
    try {
        const pelicula = await getDataById(id, 'peliculas.json')
        return pelicula
    } catch (error) {
        throw new InternalServerError("Error al obtener los datos de la pelicula", error);
    }
}
//llamar a la funcion que busca por titulo o director

static async actualizar(id, data) {
    try {
        const actualizarPelicula = await updateData(id, data, 'peliculas.json')
        return actualizarPelicula
    } catch (error) {
        throw new InternalServerError(`Fallo al actualizar la pelicula`, error);
    }
    }


}//aca termina la clase Pelicula NO BORRAR,NI ESCRIBIR MAS ABAJO


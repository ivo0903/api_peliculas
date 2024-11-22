import {v4 as uuidv4} from 'uuidv4';
import {createPeliculaFile} from '../utils/fileUtils.js'

export class Pelicula{
    #id
    #titulo
    #anio_estreno
    #director
    #duracion
    #activo

    constructor(titulo, anio_estreno,director, duracion, ){
        this.#id = uuidv4();
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

    static async crear( data) {
        try {
            const { titulo,anio_estreno,director,duracion } = data
            const pelicula = new Pelicula(titulo,anio_estreno,director,duracion)
            const peliculaObject = pelicula.getAllProperties()
      
            await createPeliculaFile(peliculaObject, 'peliculas.json')
      
            return peliculaObject
        } catch (error) {
          throw new error(`Fallo al crear la nueva pelicula`, error)
        }
      }
}
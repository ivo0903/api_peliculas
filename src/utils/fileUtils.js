import { createFile, readFile } from "../services/fileService.js"


//crear el archivo de peliculas como json
export const createPeliculaFile = async (pelicula, peliculaPath) => {
    try {
        const peliculafile = await readFile(peliculaPath);
        let peliculaJson = null
    
        !peliculafile || peliculafile.length === 0 ? (peliculaJson = [pelicula]) : peliculaJson = [ ...peliculafile, pelicula ]
    
        await createFile(peliculaJson, peliculaPath)
        
    } catch (error) {
        throw new Error(`Error al crear o guardar el archivo ${error}`)
    }
}
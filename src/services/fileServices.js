import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//crear los archivo,en cuanto a estructura tanto la carpeta como peliculas.json
export const createFile = async(data, pathData) => {
    try {
        const datafilePath = path.join(__dirname, `../data/${pathData}`)
        
        await fs.mkdir(path.dirname(datafilePath) , { recursive: true })

        await fs.writeFile(datafilePath, JSON.stringify(data, null, 4), 'utf8');
    } catch (error) {
        console.error(`No pudemos leer el archivo: ${error}` )
        throw new Error(`Error al crear o guardar el archivo ${error}`)
    }
}


//funcion para leer archivos
export const readFile = async (pathData) => {
    try {
        const datafilePath = path.join(__dirname, `../data/${pathData}`)

        const data = await fs.readFile(datafilePath, 'utf8')
        return JSON.parse(data)
    } catch (error) {
        console.error(`No pudemos leer el archivo: ${error}` )
        throw new Error(`Error al crear o guardar el archivo ${error}`)
    }
}
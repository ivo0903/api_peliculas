import { createFile, readFile } from "../services/fileServices.js"


export const createDataFile = async (data, dataPath) => {
    try {
        const datafile = await readFile(dataPath); // Ahora debería devolver un arreglo vacío si no existe
        let dataJson = datafile.length > 0 ? [...datafile, data] : [data];

        await createFile(dataJson, dataPath);
    } catch (error) {
        throw new Error(`Error al gestionar la creación del archivo con la data:`, error);
    }
}

//crear todos los datos
export const getAllData = async(pathData) => {
    try {
        const data = await readFile(pathData)
        return data
    } catch (error) {
        throw new NotFoundError('No pudimos acceder a los datos', error)
    }
}
//obtener pelicula por id
export const getDataById = async(id, pathData) => {
    try {
        const data = await readFile(pathData)
        const dataFound = data.find(dataFound => dataFound.id === id)

        return dataFound
    } catch (error) {
        throw new NotFoundError('No pudimos encontrar el dato por el id', error)
    }
}

//crear la funcion para obtener pelicula por titulo o director usanndo filter





// modificar datos
export const updateData = async(id, newData, pathData) => {
    try {
        const data = await readFile(pathData);
        const indexData  = data.findIndex(dataFound => dataFound.id === id);

        if(indexData === -1) console.error('No pudimos Encontrar el dato que buscas')
        
        //Cortesía: Devolver el dato anterior para comparar
        const oldData = {...data[indexData]}
        
        data[indexData] = { id, ...newData, active: true };
        await createFile(data, pathData)

        //Cortesía: devuelvo la data vieja
        return oldData

    } catch (error) {
        throw new YeisonError('No pudimos actualizar la data', error)
    }
}

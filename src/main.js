import express from 'express';
import fileRouter from './routes/router.js'

const app=express();
const PORT=3000

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/api/v1', fileRouter);

app.listen(PORT, () =>{
    console.log('El servidor esta arriba 🎉')
})
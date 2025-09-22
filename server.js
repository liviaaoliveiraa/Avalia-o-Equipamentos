import express from 'express';
import dotenv from 'dotenv';


const app = express();
app.use (express.json());

const serverPort=3001;

app.get("/", (req, res) => {
    res.send ("Sistema de controlamento de equipamentos funcionando! 🪛");
});

app.listen(serverPort, () => {
    console.log (`Servidor Funcionando 🚀! http://localhost:${serverPort}`)
});
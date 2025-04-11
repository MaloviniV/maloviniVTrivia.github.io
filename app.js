import express from "express"; //importo express
import fetch from "node-fetch"; //importo fetch para Node.js

const URL_API = "https://restcountries.com/v3.1/all";
const puerto = 3000;
const app = express(); //Creo el objeto express

app.use(express.static("public"));  //Permite acceder al html solo poniendo http://localhost:3000/ 

app.get("/app/all", async (req, res) => {      //relaciono el server con el clientes
  try {
    const pregunta = await fetch(URL_API);    //solicito a la api
    const data = await pregunta.json();
    res.json(data);   //envio los datos a la API como respuesta
  } catch (error) {
    console.error("Ocurrio un error con el fetch, ", error);
    res.status(500).send("Error al obtener los datos de la API");
  }
});

app.listen(puerto, () => {          //Inicio el servidor en http://localhost:3000
  console.log(`Servidor iniciado en http://localhost:${puerto}`);
});
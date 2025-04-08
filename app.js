import express from "express"; //importo express

const URL_API = "https://restcountries.com/v3.1/all";
const puerto = "3000";
const app = express(); //Creo el objeto express

app.get("./app/all", async (req, res) => {      //relaciono el server con el clientes
  try {
    const pregunta = await fetch(url_api);    //solicito a la api
    const data = await pregunta.json();
    console.log(data);
    res.json(data);   //envio los datos a la API como respuesta
  } catch (error) {
    console.log("Ocurrio un error con el fetch, ", error);
  }
});

app.listen(puerto, () => {
  console.log(`Servidor iniciado en el puerto ${puerto}`);
});

/*import express from "express";  //importo express

const app = express();    //creo el objeto app

class Data{
  static async getData(url_api){
    try {
      const resp = await fetch(url_api);
      const data = await resp.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  }
}

app.get("/", (req,res) => {   //req requisito del navegador, res respuesta del servidor
  res.send("<p>Hola Mundo</p>");
});

app.get("/saludar", (req,res) => {
  res.send("<h1>Hola hola</h1>");
});

app.listen("3000",()=>{    //Levanto el servidor
  console.log("El servidor se lavanto en el puerto 3000")
});*/

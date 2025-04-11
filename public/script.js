class Interfaz {         //Recupera los botones, maneja vistas importantes y agrega listeners
  static init() {       //Inicializa elementos vistas importantes
    this.inicio = document.querySelector(".inicio");
    this.ranking = document.querySelector(".ranking");
    this.juego = document.querySelector(".juego");
    this.nombre = document.getElementById("nombre");
    this.btnJugar = document.getElementById("btnJugar");
    this.btnRanking = document.getElementById("btnRanking");
    this.btnVolver = document.getElementById("btnVolver");
    
    this.btnJugar.addEventListener("click", (async () => {
      const txtNombre = this.nombre.value.trim(); // Elimina los espacios en blanco al inicio y al final del nombre
      if (!txtNombre) {
        this.highlightError(this.nombre);
        this.nombre.focus();
        return;
      }
      const jugador = new Jugador.crearJugador(txtNombre);
      await Data.cargarDatos();
      Juego.iniciarJuego(10,jugador);
      this.viewPlay();
    }));
    this.btnRanking.addEventListener("click", () => this.viewRanking());
    this.btnVolver.addEventListener("click", () => this.return());
  }
  
  static viewPlay() {        //Muestra la vista para jugar
    this.toggleView(this.inicio, this.juego);
  }
  
  static viewRanking() {      //Muestra la vista ranking
    this.toggleView(this.inicio, this.ranking);
  }
  
  static return() {       //Maneja el boton volver
    this.toggleView(this.ranking, this.inicio);
  }

  static highlightError(inputElement) {       //Resalta error por 2 segundos ( Coloca clase CSS "error" )
    inputElement.classList.add("error");
    setTimeout(() => {
      inputElement.classList.remove("error");
    }, 2000); // El resaltado desaparece después de 2 segundos
  }
  
  static toggleView(...elements) {  // Toggle alterna la clase ocultar  (saca y pone la clase CSS "ocultar")
    elements.forEach((element) => {
      element.classList.toggle("ocultar");
    });
  }
}
//Clase para recuperar datos del servidor
class Data {
  static URL_API = "/app/all";
  static listaPaises = []; 
  
  static async cargarDatos() {
    try {
      const answer = await fetch(this.URL_API);
      const data = await answer.json();
      console.log(data);
      this.listaPaises = data;
    } catch (error) {
      console.error("Error al cargar los datos:", error);
    }
  }

  static getPaises() {
    return this.listaPaises;
  }
}

class Juego {
  static iniciarJuego(cantPreguntas, jugador){
    const listaPreguntas = this.cargarPreguntas();
    const ranking = [];           //Lista de estadisticas de los jugadores
  }

  static cargarPreguntas(){
    const listaPaises = Data.getPaises(); //Recupero los datos de paises  
    const preguntas = [];
    const tiposPreguntas = ["capital","flag","borders"];

    return preguntas;
  }
}

class Pregunta {
  static crearPregunta(){
    let tipo;
    let pregunta;
    const opciones = [];
    let respuesta;
    let puntos;
  }
}

class Jugador {
  static crearJugador(nombre){
    let puntaje = 0
    let correctas = 0;    //Respuestas correctas
    let tiempo = 0;
    const tiemposRegistrados = [];    //Guarda el tiempo de cada respuesta
  }
}

Interfaz.init();
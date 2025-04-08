// Clase para manejar la interfaz de usuario
class UI {
  static init() {
    this.inicio = document.querySelector(".inicio");
    this.ranking = document.querySelector(".ranking");
    this.nombre = document.getElementById("nombre");
    this.btnJugar = document.getElementById("btnJugar");
    this.btnRanking = document.getElementById("btnRanking");
    this.btnVolver = document.getElementById("btnVolver");

    this.btnJugar.addEventListener("click", () => this.viewJugar());
    this.btnRanking.addEventListener("click", () => this.viewRanking());
    this.btnVolver.addEventListener("click", () => this.return());
  }

  static clearInput(inputElement) {
    inputElement.value = "";
  }

  static highlightError(inputElement) {
    inputElement.classList.add("error"); // Clase CSS para resaltar errores
    setTimeout(() => {
      inputElement.classList.remove("error");
    }, 2000); // El resaltado desaparece después de 2 segundos
  }

  static toggleView(...elements) {
    elements.forEach((element) => {
      element.classList.toggle("ocultar"); // Toggle alterna la clase ocultar
    });
  }

  static viewJugar() {
    let txtNombre = this.nombre.value.trim(); // Elimina los espacios en blanco al inicio y al final del nombre
    if (!txtNombre) {
      this.highlightError(this.nombre);
      this.nombre.focus();
      return;
    }
    this.clearInput(this.nombre);
    this.toggleView(this.inicio);
  }

  static viewRanking() {
    this.toggleView(this.inicio, this.ranking);
  }

  static return() {
    this.toggleView(this.ranking, this.inicio);
  }
}
//Clase para recuperar datos del servidor
// Esta clase se encargará de obtener las preguntas y respuestas del servidor
class Data {
  URL_API = "./app/all";

  async getData(){
    try {
      const answer = await fetch(this.URL_API);
      const data = await answer.json();
      console.log(data);

    } catch (error) {
      alert("Ocurrio un error al obtener los datos: ",error);
    }
  }
}
// Clase para manejar la lógica del juego
class Game {
  constructor() {
  }

  // Método para iniciar el juego
  startGame() {
  }

  // Método para mostrar una pregunta
  showQuestion() {
  }
}
// Inicializar la clase UI
UI.init();
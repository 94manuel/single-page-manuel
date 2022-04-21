// Autor @Manuel Fernando Santofimio Tovar
  
class Observador {
    constructor() {
        this.Observers = []; 
    }

    subscribir(d) {
        this.Observers.push(d);
    }
    desuscribir(d){
        this.Observers = this.Observers.filter(observer => observer instanceof d !== true);
    }
    notificar(model){
        this.Observers.forEach(observer => {
            observer.notificar(model);
        })
    }
    notificarHtml(model){
        this.Observers.forEach(observer => {
            observer.notificarHtml(model);
        })
    }
}
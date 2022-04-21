class Contador extends Observador {
    constructor(){
        super();
        this.value = 0;
    }

    inscrementar(){
        this.value++;
        this.notificar(this);
    }
    disminuir(){
        this.value--;
        this.notificar(this);
    }
}

class Calculadora extends Observador {
    constructor(){
        super();
        //this.input = input;
        this.value = 0;
        this.input = HTMLInputElement = document.querySelector('#value');
        this.input.addEventListener('input', (e) => {
            this.notificarHtml(e.target.value);
            this.value = e.target.value;
          });
    }

    sumar(n1,n2){
        this.value = n1 + n2 ;
        this.notificar(this);
    }

    restar(n1,n2){
        this.value = n1 - n2 ;
        this.notificar(this);
    }

    mutiplicar(n1,n2){
        this.value = n1 * n2 ;
        this.notificar(this);
    }
}
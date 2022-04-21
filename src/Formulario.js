class Formulario extends Observador {
    constructor(){
        super();
        this.html;
        this.value = 0;
        this.init();
        /*this.input = HTMLInputElement = document.querySelector('#exampleFormControlInput1');
        this.input.addEventListener('input', (e) => {
            this.notificar(e.target.value);
            this.value = e.target.value;
          });*/
    }
    init(){
        this.html = `<form>
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Email address</label>
                            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
                            <label id="price">Email address</label>
                        </div>
                        <button id="Contact" onclick="ROUTER.load('contact')">Contact</button>
                    </form>`;
    }
    enter(){
        this.input = HTMLInputElement = document.querySelector('#exampleFormControlInput1');
        this.input.addEventListener('input', (e) => {
            this.notificar(e.target.value);
            this.value = e.target.value;
          });
    }
}

class FormularioObservador {
    notificar(model){
        let dato = model.value == undefined ?model : model.value
        console.log(`El numero es :${dato}`);
        console.log(dato);
        this.el = HTMLInputElement = document.querySelector('#price');
        this.el.innerText = dato;
    }
}
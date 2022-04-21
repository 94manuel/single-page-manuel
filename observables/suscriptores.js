class NumeroDeEjemploUno {
    notificar(model){
        let dato = model.value == undefined ? model : model.value
        console.log(`El numero es : ${dato}`);
        console.log(model);
        console.log(dato);
        this.el = HTMLInputElement = document.querySelector('#price');
        this.el.innerText = dato;
    }
    notificarHtml(model){
        this.el = HTMLInputElement = document.querySelector('#price');
        this.el.innerText = model;
    }
}





class NumeroDeEjemploDos {
    notificar(model){
        console.log(`El numero es :${model.value}`);
    }
}
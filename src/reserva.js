const x = document.createElement('div');

class Reservas {
    constructor(productos){
        this.productos = productos;
        this.init();
        this.comprar;
    }
    ComprarProducto(e) {
        alert(`Gracias por comprar el producto ${e.target.parentNode.dataset.producto}`);
        e.target.parentNode.classList.add('vendido');
        e.target.disabled = true;
    }

    reservas(producto) {
    const articulo = document.createElement('article');

    articulo.dataset.producto = producto.id;
    articulo.className = 'producto';

    const img = document.createElement('img');
    const nombre = document.createElement('h2');
    const descripcion = document.createElement('p');
    const comprar = document.createElement('button');

    const textoNombre = document.createTextNode(producto.nombre)

    nombre.appendChild(textoNombre);
    nombre.className = 'nombre';
    
    descripcion.textContent = producto.descripcion;
    descripcion.className = 'descripcion';

    img.src = producto.img;
    img.alt = producto.nombre;
    img.className = 'imagen';

    comprar.textContent = 'Comprar';
    comprar.className = 'comprar';
    comprar.addEventListener('click',Reservas.ComprarProducto);

    articulo.appendChild(img);
    articulo.appendChild(nombre);
    articulo.appendChild(descripcion);
    articulo.appendChild(comprar);

    x.appendChild(articulo);
    }

    init(){        
        this.productos.forEach(this.reservas);
    }
    html(){
        return x;
    }
}
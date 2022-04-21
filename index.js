var car = new Car("AW456", new Account("Andres Herrera", "QWE234"))
car.passenger = 4;
car.printDataCar();


let calculadora = new Calculadora();

calculadora.subscribir(new NumeroDeEjemploUno());



//incio router
const productos = [
    {
        id: 1,
        nombre: 'Producto N° 1',
        descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vitae ante vehicula, tempus leo id, lobortis justo. Donec gravida vehicula urna ut aliquam. Donec id luctus turpis. Praesent porttitor luctus elit, ut hendrerit neque tempor vel. Praesent vestibulum accumsan molestie.',
        img: 'img/uno.png'
    },
    {
        id: 2,
        nombre: 'Producto N° 2',
        descripcion: 'Quisque egestas lectus id ligula suscipit, sit amet cursus ante laoreet. Donec faucibus tellus vitae enim convallis congue sed sed mauris. Sed consectetur velit eget urna tristique pharetra. Duis egestas libero ut massa fermentum faucibus vitae non urna. Mauris rutrum ante a turpis ultrices rutrum.',
        img: 'img/dos.png'
    },
    {
        id: 3,
        nombre: 'Producto N° 3',
        descripcion: 'Aenean vel diam elit. In scelerisque sagittis nulla. Etiam ornare, leo sit amet iaculis vulputate, tortor sapien lobortis felis, a finibus augue velit sed libero. Maecenas tristique mi sed pellentesque aliquam. In convallis auctor porta.',
        img: 'img/tres.png'
    }
];
let reserva = new Reservas(productos);
let form = new Formulario();
form.subscribir(new FormularioObservador());
console.log(form);
const PATHS = {
    home: {
        path: "/",
        template: `<h1>🏠 Home</h1>`,
    },
    about: {
        path: "/about",
        template: form.html,
    },
    contact: {
        path: "/contact",
        template: reserva.html(),
    }
}

const ROUTER = new Router(PATHS);
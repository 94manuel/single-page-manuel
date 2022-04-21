//Autor @Manuel Fernando Santofimio Tovar

class Router {
    constructor(paths) {
        this.paths = paths;
        this.initRouter();
    }

    initRouter() {
        const { location: { pathname = "/" } } = window;
        const URL = pathname === "/" ? "home" : pathname.replace("/", "");
        this.load(URL);
    }

    load(page = "home") {
        const { paths } = this;
        const { path, template } = paths[page] || paths.error;
        const $CONTAINER = document.querySelector("#content");
        console.log(typeof template == "object");
        console.log(template);
        if (typeof template == "object") {
            $( "#content" ).empty();
            $CONTAINER.appendChild(template);
        } else {
            $CONTAINER.innerHTML = template;
        }
        window.history.pushState({}, "done", path);
    }
}

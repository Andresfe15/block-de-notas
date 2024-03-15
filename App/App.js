import ComponentePrincipal from './components/ComponentePrincipal.js';

class App {
    constructor() {
        this.componentePrincipal = new ComponentePrincipal();
    }

    mount(elementoPadre) {
        this.componentePrincipal.mount(elementoPadre);
    }
}

export default App;

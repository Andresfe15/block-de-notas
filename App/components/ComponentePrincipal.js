class ComponentePrincipal {
    constructor() {
        this.elemento = document.createElement('div');
        this.elemento.innerHTML = `
            <h1>Mi Block de Notas:</h1>
            <textarea></textarea>
            <button id="guardar-nota">Guardar Nota</button>
            <button id="borrar-todas-notas">Borrar Todas las Notas</button>
            <div id="lista-notas"></div>
        `;

        this.elemento.querySelector('#guardar-nota').addEventListener('click', this.guardarNota.bind(this));
        this.elemento.querySelector('#borrar-todas-notas').addEventListener('click', this.borrarTodasLasNotas.bind(this));
    }

    guardarNota() {
        const textarea = this.elemento.querySelector('textarea');
        const textoNota = textarea.value.trim();
        
        if (textoNota !== '') {
            const listaNotas = this.elemento.querySelector('#lista-notas');
            const nuevaNota = document.createElement('div');
            nuevaNota.classList.add('nota');
            nuevaNota.innerHTML = `
                <span>${textoNota}</span>
                <button class="eliminar-nota">Eliminar</button>
            `;
            listaNotas.appendChild(nuevaNota);

            // Añadir evento de clic al botón de eliminar de esta nota
            nuevaNota.querySelector('.eliminar-nota').addEventListener('click', () => this.eliminarNota(nuevaNota));

            textarea.value = '';
        } else {
            alert('Por favor, escribe algo antes de guardar la nota.');
        }
    }

    eliminarNota(nota) {
        nota.remove();
    }

    borrarTodasLasNotas() {
        const listaNotas = this.elemento.querySelector('#lista-notas');
        listaNotas.innerHTML = '';
    }

    mount(elementoPadre) {
        elementoPadre.appendChild(this.elemento);
    }
}

export default ComponentePrincipal;




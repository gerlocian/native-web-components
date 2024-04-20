class SimpleComponent extends HTMLElement {
    #shadow;
    
    constructor() {
        super();
        this.#shadow = this.attachShadow({ mode: 'closed' });
    }

    connectedCallback() {
        const span = document.createElement('span');
        span.textContent = 'Hello World!';

        this.#shadow.appendChild(span);
    }
}

customElements.define('nwc-simple', SimpleComponent);
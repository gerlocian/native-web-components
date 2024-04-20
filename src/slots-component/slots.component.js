class SlotsComponent extends HTMLElement {
    #shadow;
    #slot;
    #wrapper;

    constructor() {
        super();
        this.#shadow = this.attachShadow({ mode: 'closed' });
        this.#slot = document.createElement('slot');
        this.#wrapper = document.createElement('div');
    }

    connectedCallback() {
        const span = document.createElement('span');
        span.textContent = 'Hello, ';
        this.#wrapper.appendChild(span);

        this.#slot.setAttribute('name', 'data-name');
        this.#wrapper.appendChild(this.#slot)
        
        this.#shadow.appendChild(this.#wrapper);
    }

    #createSlot(slotName, slotValue) {
        const slotElement = document.createElement('span');
        slotElement.setAttribute('slot', slotName);
        slotElement.textContent = slotValue;
        return slotElement;
    }
}

customElements.define('nwc-slot-example', SlotsComponent);
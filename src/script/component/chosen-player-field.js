import './chosen-player-list.js';

class ChosenPlayerField extends HTMLElement {
    connectedCallback(){
        this.render();
    }

    render(){
        this.innerHTML = `
            <h2>Your Players</h2>
        `;
    }
}

customElements.define("chosen-player-field", ChosenPlayerField);
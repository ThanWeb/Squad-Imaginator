import './chosen-player-list.js';

class ChosenPlayerField extends HTMLElement {
    connectedCallback(){
        this.render();
    }

    render(){
        this.innerHTML = `
            <h2>Bench</h2>
            <p class="zero-bench">There is no players on the bench</p>
        `;
    }
}

customElements.define("chosen-player-field", ChosenPlayerField);
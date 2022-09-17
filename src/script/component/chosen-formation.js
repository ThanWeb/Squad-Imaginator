import formation from "../data/formation.js";

class ChosenFormation extends HTMLElement {
    connectedCallback(){
        this.render();
    }

    render(){
        this.innerHTML = `
            <img src="" alt="formation" class="chosen-formation-image">
            <h2 class="chosen-formation-name"></h2>
            <button class="change-formation">Change Formation</button>
        `;
    }
}

customElements.define("chosen-formation", ChosenFormation);
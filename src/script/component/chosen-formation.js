class ChosenFormation extends HTMLElement {
    connectedCallback(){
        this.render();
    }

    render(){
        this.innerHTML = `
            <h2>Your Formation</h2>
            <img src="" alt="formation" class="chosen-formation-image">
            <h3 class="chosen-formation-name"></h3>
            <button class="change-formation">Change Formation</button>
        `;
    }
}

customElements.define("chosen-formation", ChosenFormation);
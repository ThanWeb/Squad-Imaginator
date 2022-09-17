class FormationTemplate extends HTMLElement {
    connectedCallback(){
        this.render();
    }

    render(){
        this.innerHTML = `
            <div class="player-position"></div>
            <div class="player-position"></div>
            <div class="player-position"></div>
            <div class="player-position"></div>
            <div class="player-position"></div>
            <div class="player-position"></div>
            <div class="player-position"></div>
            <div class="player-position"></div>
            <div class="player-position"></div>
            <div class="player-position"></div>
            <div class="player-position"></div>
        `;
    }
}

customElements.define("formation-template", FormationTemplate);
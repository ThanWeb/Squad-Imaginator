import './player-search-list.js';

class PlayerSearchField extends HTMLElement {
    connectedCallback(){
        this.render();
    }

    render(){
        this.innerHTML = `
            <input type="text" id="player-name" placeholder="Player name is ..">
            <button class="submit-player-name" type="submit">Search</button>
            <p class="loading" hid>Loading ... </p>
        `;
    }
}

customElements.define("player-search-field", PlayerSearchField);
import './player-search-list.js';

class PlayerSearchField extends HTMLElement {
    connectedCallback(){
        this.render();
    }

    render(){
        this.innerHTML = `
            <h2>Search Player</h2>
            <input type="text" id="player-name" placeholder="Player name ...">
            <button class="submit-player-name" type="submit">Search</button>
            <p class="invalid-character-alert" hidden>Invalid Character</p>
            <p class="success-alert" hidden></p>
            <p class="duplicate-alert" hidden></p>
            <p class="maximum-alert" hidden></p>
            <p class="loading" hid>Loading ... </p>
        `;
    }
}

customElements.define("player-search-field", PlayerSearchField);
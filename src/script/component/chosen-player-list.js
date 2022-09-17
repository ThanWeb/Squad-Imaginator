import './chosen-player-item.js';

class ChosenPlayersList extends HTMLElement {
    set players(players) {
        this._players = players;
        this.render();
    }

    render(){
        this._players.forEach(player => {
            const ChosenPlayerItem = document.createElement("chosen-player-item");
            ChosenPlayerItem.player = player;
            this.appendChild(ChosenPlayerItem);
        });
    }
}

customElements.define("chosen-player-list", ChosenPlayersList);
import './player-search-item.js';

class PlayerSearchList extends HTMLElement {
    set players(players) {
        this._players = players;
        this.render();
    }

    render(){
        this._players.forEach(player => {
            if(player.strSport == "Soccer"){
                const playerSearchItem = document.createElement("player-search-item");
                playerSearchItem.player = player;
                this.appendChild(playerSearchItem);
            }
        });
    }
}

customElements.define("player-search-list", PlayerSearchList);
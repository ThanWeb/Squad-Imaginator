class PlayerSearchItem extends HTMLElement {
    set player(player) {
        this._player = player;
        this.render();
    }

    render(){
        const defaultImage = 'http://antekteknologi.my.id/wp-content/uploads/2022/09/player-default-image.png';
        if(this._player.strTeam == '_Retired Soccer')
            this._player.strTeam = 'Retired';
        else if(this._player.strTeam == '_Deceased Soccer')
            this._player.strTeam = 'Passing Away';
        if(this._player.strThumb == null)
            this._player.strThumb = `${defaultImage}`;
        this.innerHTML = `
            <img class="player-image" alt="${this._player.strPlayer}" src="${this._player.strThumb}">
            <div>
                <span class="player-id" hidden>${this._player.idPlayer}</span>
                <p class="player-name">${this._player.strPlayer}</p>
                <p class="player-team">${this._player.strTeam}</p>
                <p class="player-nationality">${this._player.strNationality}</p>
                <button class="select-player">Select</button>
            </div>
        `;
    }
}

customElements.define("player-search-item", PlayerSearchItem);
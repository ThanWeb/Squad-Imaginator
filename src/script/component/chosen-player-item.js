class ChosenPlayerItem extends HTMLElement {
    set player(player) {
        this._player = player;
        this.render();
    }

    render(){
        const defaultImage = 'http://antekteknologi.my.id/wp-content/uploads/2022/09/player-default-image.png';
        if(this._player.team == '_Retired Soccer')
            this._player.team = 'Retired';
        if(this._player.img == null)
            this._player.img = `${defaultImage}`;
        this.innerHTML = `
            <span class="selected-player-id" hidden>${this._player.id}</span>
            <p class="selected-player-name">${this._player.name}</p>
            <p class="selected-player-team">${this._player.team}</p>
            <p class="selected-player-nationality">${this._player.nationality}</p>
            <img class="selected-player-image" alt="${this._player.name}" src="${this._player.img}">
            <button class="remove-player">Remove</button>
        `;
    }
}

customElements.define("chosen-player-item", ChosenPlayerItem);
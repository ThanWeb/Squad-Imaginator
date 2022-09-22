class LineUpItem extends HTMLElement {
    connectedCallback(){
        this.render();
    }

    render(){
        this.innerHTML = `
            <img src="http://antekteknologi.my.id/wp-content/uploads/2022/09/player-default-image.png" class="starting-player-image">
            <div>
                <span class="starting-player-id" hidden></span>
                <p class="starting-player-name">???</p>
                <p class="starting-player-team">???</p>
                <p class="starting-player-nationality">???</p>
                <p class="player-position"></p>
                <button class="select-starting">Select</button>
            </div>  
        `;
    }
}

customElements.define("line-up-item", LineUpItem);
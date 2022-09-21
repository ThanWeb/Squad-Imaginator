class ModalAllPlayer extends HTMLElement {
    connectedCallback(){
        this.render();
    }

    render(){
        this.innerHTML = `
            <div>
                <table class="modal-player-list"></table>
                <button class="exit-modal">Exit</button>
            </div>
        `;
    }
}

customElements.define("modal-all-player", ModalAllPlayer);
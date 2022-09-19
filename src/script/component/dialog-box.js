class DialogBox extends HTMLElement {
    connectedCallback(){
        this.render();
    }

    render(){
        this.innerHTML = `
            <p>Previous Formation has been saved<p>
            <img src="" alt="formation" class="chosen-formation-image">
            <h2 class="chosen-formation-name"></h2>
            <p>Make a new one?</p>
            <button class="create-new">Yes</button>
            <button class="continue">No</button>
        `;
    }
}

customElements.define("dialog-box", DialogBox);
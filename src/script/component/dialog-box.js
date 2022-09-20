class DialogBox extends HTMLElement {
    connectedCallback(){
        this.render();
    }

    render(){
        this.innerHTML = `
            <h2>Previous Formation has been saved<h2>
            <img src="" alt="formation" class="chosen-formation-image">
            <h3 class="chosen-formation-name"></h3>
            <p>Make a new one?</p>
            <button class="create-new">Yes</button>
            <button class="continue">No</button>
        `;
    }
}

customElements.define("dialog-box", DialogBox);
class DialogBox extends HTMLElement {
    connectedCallback(){
        this.render();
    }

    render(){
        this.innerHTML = `
            <div>
                <h3>Previous Formation has been saved<h3>
                <h3 class="chosen-formation-name"></h3>
            </div>
            <div class="image">
                <img src="" alt="formation" class="chosen-formation-image">
            </div>
            <div>
                <p>Make a new one?</p>
                <button class="create-new">Yes</button>
                <button class="continue">No</button>
            </div>
        `;
    }
}

customElements.define("dialog-box", DialogBox);
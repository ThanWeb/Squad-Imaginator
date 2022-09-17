class DialogBox extends HTMLElement {
    connectedCallback(){
        this.render();
    }

    render(){
        this.innerHTML = `
            <p>Previous Formation has been saved<p>
            <p>Make a new one?</p>
            <button class="create-new">Yes</button>
            <button class="continue">No</button>
        `;
    }
}

customElements.define("dialog-box", DialogBox);
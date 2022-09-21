class TitleField extends HTMLElement {
    connectedCallback(){
        this.render();
    }

    render(){
        this.innerHTML = `
            <h1>SQUAD IMAGINATOR</h2>
            <p>HIGH IMAGINATION, HARD REALIZATION</p>
            <!-- <img src="http://antekteknologi.my.id/wp-content/uploads/2022/09/Squad-Imaginator-Logo.png" alt="Squad Imaginator Logo" class="logo"> -->
        `;
    }
}

customElements.define("title-field", TitleField);
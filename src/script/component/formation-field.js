import formation from "../data/formation.js";

class FormationField extends HTMLElement {
    connectedCallback(){
        this.render();
    }

    render(){
        this.innerHTML = `
            <h1>Choose Your Formation</h1>
            <div> 
                <img src="https://img.icons8.com/sf-regular/48/000000/chevron-left.png" alt="left-button" class="left-button button"/>
                <img src="${formation[15].image}" alt="formation" class="formation-image">
                <img src="${formation[0].image}" alt="formation" class="formation-image">
                <img src="${formation[1].image}" alt="formation" class="formation-image">
                <img src="https://img.icons8.com/sf-regular/48/000000/chevron-right.png" alt="right-button" class="right-button button"/>
            </div>
            <h2 class="formation-name">${formation[0].name}</h2>
            <button class="choose-formation">Go</button>
        `;
    }
}

customElements.define("formation-field", FormationField);
import formation from "../data/formation.js";

class FormationField extends HTMLElement {
    connectedCallback(){
        this.render();
    }

    render(){
        this.innerHTML = `
            <h2>Choose Your Formation</h2>
            <div class="choose-formation-field"> 
                <img src="https://img.icons8.com/sf-regular/48/000000/chevron-left.png" alt="left-button" class="left-button button" onclick="event.stopPropagation()"/>
                <img src="${formation[15].image}" alt="formation" class="formation-image" onclick="event.stopPropagation()">
                <img src="${formation[0].image}" alt="formation" class="formation-image showed" onclick="event.stopPropagation()">
                <img src="${formation[1].image}" alt="formation" class="formation-image" onclick="event.stopPropagation()">
                <img src="https://img.icons8.com/sf-regular/48/000000/chevron-right.png" alt="right-button" class="right-button button" onclick="event.stopPropagation()"/>
            </div>
            <h4 class="formation-name">${formation[0].name}</h4>
            <button class="choose-formation">GO</button>
        `;
    }
}

customElements.define("formation-field", FormationField);
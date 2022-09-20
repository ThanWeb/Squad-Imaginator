import './line-up-item.js';

class LineUpField extends HTMLElement {
    connectedCallback(){
        this.render();
    }

    render(){
        this.innerHTML = `
            <h2>Starting Line-up</h2>
            <div class="starting-list"></div>
        `;

        for(let i = 0; i < 11; i++){
            const lineUpItem = document.createElement("line-up-item");
            const startingList = document.querySelector(".starting-list");
            startingList.appendChild(lineUpItem);
        }
    }
}

customElements.define("line-up-field", LineUpField);
const findYear = () => {
    let now = new Date();
    let year = `${now.getFullYear()}`;
    return year;
};

class CopyrightField extends HTMLElement {
    connectedCallback(){
        this.render();
    }

    render(){
        this.innerHTML = `
            <p>Powered by TheSportsDB</p>
            <p>Copyright &#169; ${findYear()} Hans Rio. All Right Reserved</p>
        `;
    }
}

customElements.define("copyright-field", CopyrightField);
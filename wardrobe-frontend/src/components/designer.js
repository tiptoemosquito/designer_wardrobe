class Designer {
    constructor(data) {
        this.id = data.id 
        this.description = data.description
        this.price = data.price
        this.leather_textile = data.leather_textile
        this.category = data.category
    }

    render() {
        return `
        <li>
        <a href="#" data-id="${this.id}">${this.description}</a> ${this.leather_textile ? "Leather" : "Not Leather"} <br>
        </li>
        <br>
        `
    }

    renderDesigner() {
        return `
        <h3>${this.description}</h3>
        <p>${this.price}</p>
        <hr>
        <br>
        <p>${this.leather_textile ? "Leather" : "Not Leather"}</p>
        <br>
        <button id="delete-designer" data-id="${this.id}">Delete Designer</button>
        `
    }
}
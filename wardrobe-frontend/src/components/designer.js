class Designer {
    constructor(data) {
        this.id = data.id 
        this.name = data.name
        this.price = data.price
        this.leather_textile = data.leather_textile
        this.category = data.category
    }

    render() {
        return `
        <li>
        <a href="#" data-id="${this.id}">${this.name}</a> ${this.leather_textile ? "Leather" : "Not Leather"} <br>
        </li>
        <br>
        `
    }

    renderDesigner() {
        return `
        
        `
    }
}
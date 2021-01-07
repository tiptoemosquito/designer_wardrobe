class Category {
    constructor(data) {
        this.id = data.id
        this.name = data.name
        this.designers = data.designers
    }

    renderCategories() {
        return `
        <li>
        <a href="#" data-id="${this.id}">${this.name}</a>
        </li>
        <br>
        `
    }

    renderCategory() {
        return `
        <h3>${this.name}</h3>
        <br>
        <button type="button" id="add-designer-form">Add Designer</button>
        <br>
        `
    }
}
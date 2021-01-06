class Category {
    static container = document.getElementById("category-container")

    constructor(category){
        this.category = category
        this.render()
        this.attachEventListener()
    }
}
class Category {
    static container = document.getElementById("category-container")

    constructor(category){
        this.category = category
        this.render()
        this.attachEventListener()
    }

    static getAll(){
        api.getAllCategories().then((data) =>
        data.forEach((category) => new Category(category)))
    }

    //render(){
    
    //}
}
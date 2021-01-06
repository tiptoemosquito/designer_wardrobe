class ApiService {
    constructor(baseURL){
        this.baseURL = baseURL
    }
}

//add 3 fetches here to keep code clean
//CRUD actions to be used? Read, Update and ???

getAllCategories = () => fetch(`${this.baseURL}/categories`).then(resp => resp.json())

//getAllDesignersByCategories = (id) => fetch(`${this.baseURL}/categories/${id}/designers`).then(resp => resp.json())

//updateQuantity = (id) => fetch(`${this.baseURL}/categories/${id}`, {method: ""}).then(resp => resp.json())
class ApiService {
    constructor(baseURL){
        this.baseURL = baseURL
    }
}

//add 3 fetches here to keep code clean
//CRUD actions to be used? Read, Update and ???

getAllDesigners = () => fetch(`${this.baseURL}/designers`).then(resp=>resp.json())

getAllCategoriesByDesigner = (id) => fetch

updateQuantity = (id) => fetch
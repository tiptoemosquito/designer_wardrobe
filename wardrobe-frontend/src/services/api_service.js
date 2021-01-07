class ApiService {
    constructor(){
        this.baseURL = 'http://localhost:3000'
    }

    async fetchDesigners() {
        let res = await fetch(this.baseURL + '/designers')
        let data = await res.json()
        return data
    }

    async fetchDesigner(id) {
        let res = await fetch(this.baseURL + `/designers/${id}`)
        let data = await res.json()
        return data
    }

    async fetchAddDesigner(designerData) {
        let configObj = {
            method: 'POST',
            body: JSON.stringify(designerData),
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }
        let res = await fetch(this.baseURL + '/designers', configObj)
        let data = await res.json()
        return data
    }

    async fetchCategories() {
        let res = await fetch(this.baseURL + '/categories')
        let data = await res.json()
        return data
    }

    async fetchCategory(id) {
        let res = await fetch(this.baseURL + `/categories/${id}`)
        let data = await res.json()
        return data
    }

    async fetchAddCategory(categoryData) {
        let configObj = {
            method: 'POST',
            body: JSON.stringify(categoryData),
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }
        let res = await fetch(this.baseURL + '/categories', configObj)
        let data = await res.json()
        return data
    }

    async fetchRemoveDesigner(id) {
        let configObj = {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }
        let res = await fetch(this.baseURL + `/designers/${id}`, configObj)
    }
}

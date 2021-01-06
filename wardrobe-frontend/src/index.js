const apiService = new ApiService()
let main = document.getElementById('main')

const init = () => {
    addEventListeners()
    renderCategories()
}

function addEventListeners() {
    document.getElementById('designers').addEventListener('click', renderDesigners)
    document.getElementById('category-form').addEventListener('click', displayCreateDesignerForm)
    document.getElementById('categories').addEventListener('click', renderCategories)
}

async function renderDesigner() {
    document.getElementById("new-category-form").innerHTML = ""
    document.getElementById("new-designer-form").innerHTML = ""
    const designers = await apiService.fetchDesigners() 
    main.innerHTML = ""
    designers.map(designer => {
        const newDesigner = new Designer(designer)
        main.innerHTML += newDesigner.render() 
    })
    attachClicks()
}

async function renderCategories() {
    document.getElementById("new-category-form").innerHTML = ""
    document.getElementById("new-designer-form").innerHTML = ""
    const cats= await apiService.fetchCategories()
    main.innerHTML = ""
    cats.map(cat => {
        const newCategory = new Category(cat)
        main.innerHTML += newCategory.renderCategories() 
    })
    attachClicksLib()
}

function displayCreateForm(id) {
    main.innerHTML = ""
    document.getElementById("new-category-form").innerHTML = ""
    let formDiv = document.querySelector("#new-designer-form")
    let html = `
    <form>
    <input type="hidden" id="category-id" value="${id}">
    <label>Name: </label>
    <input type="text" id="name"><br>
    <br>
    <label>Price: </label>
    <input type="text" id="price"><br>
    <br>
    <label>Quantity: </label>
    <input type="text" id="quantity"><br>
    <br>
    <input type="submit">
    </form>
    `
    formDiv.innerHTML = html 
    document.querySelector('form').addEventListener('submit', addDesigner)
}

function clearForm() {
    let formDiv = document.querySelector("#new-designer-form")
    let formDivLib = document.querySelector("#new-category-form")
    formDiv.innerHTML = ""
    formDivLib.innerHTML = ""
}

async function addDesigner(e) {
    e.preventDefault()
    let main = document.getElementById("main")
    let designer = {
        category_id: e.target.querySelector("#category-id").value,
        name: e.target.querySelector("#name").value,
        price: e.target.querySelector("#price").value,
        quantity: e.target.querySelector("#quantity").value
    }
    let data = await apiService.fetchAddDesigner(designer)
    let newDesigner = new Designer(data)
    main.innerHTML += newDesigner.render()
    attachClicks()
    clearForm()
    e.target.style.display = "none"
}
class Designer {
    static container = document.getElementById("designers-container")

    constructor(designer){
        this.designer = designer
        this.render()
        this.attachEventListener()
    }

    static renderAll(designers){
        this.container.innerHTML=""
        designers.forEach(designer => new Designer(designer))
    }

    //render(){

    //}

    //renderInnerHtml(){

    //}

    //attachEventListener=() =>{

    //}

    //handleOnClick = (event) =>{

    //}

    //updateDesigner=(designer)=>{

    //}
}
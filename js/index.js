
const writeArray = (array) => {
    for(let item of array){
        const div = document.createElement("div")
        const text = document.createTextNode(item)
        div.appendChild(text)
        document.body.appendChild(div)
    }
}


if(window.confirm("Deseja adicionar uma lista temporária?")){
    let values = window.prompt("Insira os itens os separando por virgulas(faça no bloco de notas se a quantidade for muito grande!)")
    let itemsArray = values.split(",")
    writeArray(itemsArray)
}
else{
    let itemsArray = defaultItems
    writeArray(itemsArray)
}




    
const secondSection = document.getElementById("secondSection")
const divImgTg = document.getElementById("div-img-tg")

var size = 0

do{
    size = window.prompt("Digite a quantidade de Monitores/Atiradores (2-3):")

    if(size < 2 || size > 3){
        window.alert("Digite um valor válido!!!!")
    }   
}while(size < 2 || size > 3)

if(size == 2){
    secondSection.style.display = "none"
    divImgTg.style.display = "flex"
}
else if (size == 3){
    secondSection.style.display = "flex"
    divImgTg.style.display = "none"
}

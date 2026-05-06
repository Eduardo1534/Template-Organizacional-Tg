const firstSection = document.getElementById("firstSection")
const secondSection = document.getElementById("secondSection")
const thirdSection = document.getElementById("thirdSection")
const divImgTg = document.getElementById("div-img-tg")

var size = 0

do{
    size = window.prompt("Digite a quantidade de Monitores/Atiradores (1-3):")

    if(size < 1 || size > 3){
        window.alert("Digite um valor válido!!!!")
    }   
}while(size < 1 || size > 3)

if(size == 1){
    firstSection.style.display = "none"
    secondSection.style.display = "none"
    thirdSection.style.display = "flex"
    thirdSection.style.width = "50%"
    divImgTg.style.display = "flex"
    divImgTg.style.width = "50%"
}

else if(size == 2){
    firstSection.style.display = "flex"
    secondSection.style.display = "none"
    thirdSection.style.display = "flex"
    divImgTg.style.display = "flex"
}

else if (size == 3){
    firstSection.style.display = "flex"
    secondSection.style.display = "flex"
    thirdSection.style.display = "flex"
    divImgTg.style.display = "none"
}

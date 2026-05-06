const sizeVerification = () => {
    var size = 0

    do{
        size = window.prompt("Digite a quantidade de Monitores/Atiradores (1-3):")
        if(size < 1 || size > 3){
            window.alert("Digite um valor válido!!!!")
        }   

    }while(size < 1 || size > 3)

    return size
}

const options = (x) => {

    if(x == 1){
        img1.addEventListener("error", imgVerification(1))

        firstSection.style.display = "flex"
        secondSection.style.display = "none"
        thirdSection.style.display = "none"
        firstSection.style.width = "50%"
        divImgTg.style.display = "flex"
        divImgTg.style.width = "50%"
        main.insertBefore(firstSection, secondSection)
        
    }

    else if(x == 2){
        img1.addEventListener("error", imgVerification(1))
        img2.addEventListener("error", imgVerification(2))

        firstSection.style.display = "flex"
        secondSection.style.display = "flex"
        thirdSection.style.display = "none"
        divImgTg.style.display = "flex"
    }

    else if (x == 3){
        img1.addEventListener("error", imgVerification(1))
        img2.addEventListener("error", imgVerification(2))
        img3.addEventListener("error", imgVerification(3))

        firstSection.style.display = "flex"
        secondSection.style.display = "flex"
        thirdSection.style.display = "flex"
        divImgTg.style.display = "none"
    }
}

const imgVerification = (x) => {
    const imgId = "img-" + x

    if(counter[x-1] == Extensions.length){
        counter[x-1] = 0
    }

    document.getElementById(imgId).src = dir + "0" + x + Extensions[counter[x-1]]
    counter[x-1] ++
}

const showWarnings = () => {
    warnings.forEach(element => {
        window.alert(element)
    });

}


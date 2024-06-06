//function to head
function menu(){
    let menuMobile = document.querySelector('.mobile-menu');
    let iconMenu = document.querySelector(".mobile-menu-icon")
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        iconMenu.style.display = "block"

    } else {
        menuMobile.classList.add('open');
        iconMenu.style.display = "none"
    }
}


// function to slideshow
function technology(){
    var inputnuvem = document.querySelector("#input_nuvem")
    var inputiot = document.querySelector("#input_iot")
    var inputapp = document.querySelector("#input_app")
    var inputanalise = document.querySelector("#input_analise")
    var nuvem = document.querySelector("#card_nuvem")
    var iot = document.querySelector("#card_iot")
    var app = document.querySelector("#card_app")
    var analise = document.querySelector("#card_analise")

    if(inputnuvem.checked == true){
        nuvem.style.height = "350px"
        iot.style.height = "150px"
        app.style.height = "150px"
        analise.style.height = "150px"
    }
    else if(inputiot.checked == true ){
        nuvem.style.height = "150px"
        iot.style.height = "330px"
        app.style.height = "150px"
        analise.style.height = "150px"
    }
    else if(inputapp.checked == true){
        nuvem.style.height = "150px"
        iot.style.height = "150px"
        app.style.height = "330px"
        analise.style.height = "150px"
    }
    else{
        nuvem.style.height = "150px"
        iot.style.height = "150px"
        app.style.height = "150px"
        analise.style.height = "330px"
    }

}

//carrosel

const container = document.querySelector(".container_carrosel")
const comentarios = document.querySelectorAll(".container_carrosel div")
let x = 0
let largura = window.innerWidth

function carrosel(){
    if(largura <= 520){
        x++;

        if(x > 2){
            x = 0
        }

        container.style.transform = `translateX(${-x * 400}px)`
    }
    else{
        x++;

        if(x > 2){
            x = 0
        }
    
        container.style.transform = `translateX(${-x * 900}px)`
    }
}

setInterval(carrosel, 4800)

//respondividade

console.log(largura)


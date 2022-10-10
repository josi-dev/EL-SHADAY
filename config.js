
function dialogoDeAjuda() {
    document.getElementById("ajuda").setAttribute("open","")
    
}

function fecharAjuda() {
    document.getElementById("ajuda").removeAttribute("open")
}

setInterval(function () {
var box = document.getElementById("boxAtencao")
    if (box.style.borderColor == "blue") {
        box.style.borderColor = '#ff00de'
    }else {
        box.style.borderColor = 'blue'
    }
}, 200)




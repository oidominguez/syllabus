// Button Dark-Mode

let $html = document.querySelector('html')
let $checkbox = document.querySelector('#switch')

$checkbox.addEventListener('change', function () {
    if (this.checked) {
        $html.classList.add('dark-mode');
        localStorage.setItem('dark-mode', 'true');
    }
    else {
        $html.classList.remove('dark-mode');
        localStorage.setItem('dark-mode', 'false');
    }
});

// Recovery Dark Mode data //
function recuperarDarkMode() {
    const valor = localStorage.getItem('dark-mode');
    if (valor == 'true') {
        $html.classList.add('dark-mode');
        $checkbox.setAttribute('checked', 'checked');
    }
    else {
        $html.classList.remove('dark-mode');
    }
}
recuperarDarkMode();
// Acordeon //

const acordeonArray = document.getElementsByClassName('acordeon');

for (var i = 0; i < acordeonArray.length; i++) {
    acordeonArray[i].addEventListener("click", function () {
        this.classList.toggle("selection");
        const painel = this.nextElementSibling;
        if (painel.style.maxHeight) {
            painel.style.maxHeight = null;
        } else {
            painel.style.maxHeight = painel.scrollHeight + "px";
        }
    });
}

// Gestão de todas as Semanas//

let paineis = document.getElementsByClassName("painel");
let semanas = document.getElementsByClassName("acordeon");
for (let i = 0; i < paineis.length; i++){
    let titulos = paineis[i].childNodes[1].childNodes;
    let j = 0;
    titulos.forEach(element => {
        if(element["localName"] == "button"){
            let dia_atual = element.innerText[0].toLowerCase()+ ((element.innerText[1] == "á")? "a": element.innerText[1])+ element.innerText[2];
            element.addEventListener("click", function () {
                abrirTab(i+1, dia_atual)
            });
            if(j == 0){
                element.click();
            }
            j++;
        }
    });

}

function abrirTab(num_tab, atual_dia) {
    const conteudoTab = document.getElementsByClassName("conteudoTab"+ num_tab);
    for (var i = 0; i < conteudoTab.length; i++) {
        conteudoTab[i].style.display = "none";
    }
    const btnTabs = document.querySelectorAll('[data-btnTabs');
    for (var i = 0; i < btnTabs.length; i++) {
        btnTabs[i].classList.remove('active');
    }
    document.getElementById("s"+ num_tab+ atual_dia).style.display = "block";
}


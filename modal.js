let selecionaOlugarPraAbotarOmodal = document.querySelector('#header');
            
let btnModal = document.createElement('button');
btnModal.setAttribute('class','gatilho_do_modal');
btnModal.setAttribute('type','button');
btnModal.style.display = "none";
btnModal.innerHTML = "Teste";

let criadivPaiModal = document.createElement('div');
criadivPaiModal.setAttribute('class','overflow-modal');
criadivPaiModal.setAttribute('id','myModal');

let criadivContentModal = document.createElement('div');
criadivContentModal.setAttribute('class','overflow-modal-content');

let criaSpanModal = document.createElement('span');
criaSpanModal.setAttribute('class','close-button');
criaSpanModal.innerHTML = "×";

let criaFigureModal = document.createElement('figure');

let criaLinkModal = document.createElement('a');
criaLinkModal.href = "https://www.univarejo.com.br";

let criaImgModal = document.createElement('img');
criaImgModal.setAttribute('class','img-fluid');
criaImgModal.src="https://www.univarejo.com.br/FILES/_CUSTOM_TEMPLATES/CUSTOM_template_00001_2_1_1_1_1/_IMG/CAMPANHAS/BLACKFRIDAY/black-friday-2019-1080x1080.png";



criaLinkModal.appendChild(criaImgModal);
criaFigureModal.appendChild(criaLinkModal);

criadivContentModal.appendChild(criaSpanModal);
criadivContentModal.appendChild(criaFigureModal);

criadivPaiModal.appendChild(criadivContentModal);

selecionaOlugarPraAbotarOmodal.appendChild(btnModal);
selecionaOlugarPraAbotarOmodal.appendChild(criadivPaiModal);



var modal = document.querySelector(".overflow-modal");
var gatilho_do_modal = document.querySelector(".gatilho_do_modal");
var closeButton = document.querySelector(".close-button");

function toggleModal() {
    modal.classList.toggle("show-modal");
}

function windowOnClick(event) {
    if (event.target === modal) {
        toggleModal();
    }
}

gatilho_do_modal.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);


let clicaNessaMerda = document.querySelector(".gatilho_do_modal");
clicaNessaMerda.click();
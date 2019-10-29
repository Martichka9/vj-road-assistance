import './styles/styles.scss';
import "./styles/scss/fontawesome.scss";
import "./styles/scss/solid.scss";
import './imgs/needpix_com_edited_image.png';
import * as Menu from "./scripts/menu.js";
import "./styles/ms-ss.scss";

export function showMenu(elem) {
    if (elem.classList.contains('selectedM')) {
        document.getElementsByClassName('fa-chevron-down')[0].style.display = "none";
        document.getElementsByClassName('fa-chevron-right')[0].style.display = "inline-block";
        document.getElementById('mainMenu').style = 'display:flex; flex-direction: column; background-color: #405f7f; width:100%;position: absolute; top: 100px';
        Array.from(document.getElementsByClassName('menuItem')).forEach(elem => {elem.style.width = "100%";});
        
    } else {
        document.getElementsByClassName('fa-chevron-down')[0].style.display = "inline-block";
        document.getElementsByClassName('fa-chevron-right')[0].style.display = "none";
        document.getElementById('mainMenu').style.display = 'none';
    }
}

export function clickCheck(elHeight, clickY) {
    if (clickY > 100) {
        changeClass ()
    }
}

export function changeClass (el) {
    if (el.classList.contains("notSelectedM")) {
        el.className = "selectedM";
    } else {
        el.className = "notSelectedM";
    }
    showMenu(el);
}

export default function defFn (){
    if (window.innerWidth < 828 ) {
        document.getElementById('mainMenu').style.display = 'none';
        document.getElementsByClassName('fa-chevron-down')[0].style.display = "inline-block";

        document.getElementById('menuIcon').addEventListener('click', ev => {
            changeClass(ev.path[1]);
        },false);

        document.getElementById('mainMenu').addEventListener('click', ev => {
            changeClass(document.getElementById('menuIcon'));
        })
    }

}

document.addEventListener('readystatechange', (event) => {
    if (document.readyState === "complete") {
        defFn();
    }
});



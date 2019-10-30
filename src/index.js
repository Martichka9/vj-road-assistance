import './styles/styles.scss';
import "./styles/scss/fontawesome.scss";
import "./styles/scss/solid.scss";
import './imgs/needpix_com_edited_image.png';
import * as Menu from "./scripts/menu.js";
import "./styles/ms-ss.css";

export default function defFn (){
    
    if (window.innerWidth < 828 || window.innerWidth < window.innerHeight) {
        document.getElementById('mainMenu').style.display = 'none';
        document.getElementsByClassName('fa-chevron-down')[0].style.display = "inline-block";

        document.getElementById('menuIcon').addEventListener('click', ev => {
            Menu.changeClass(ev.path[1]);
        },false);
        
        document.getElementById('mainMenu').addEventListener('click', ev => {
            Menu.changeClass(document.getElementById('menuIcon'));
        })

        window.addEventListener('click', ev => {
            if (ev.clientY > 500 && document.getElementById('menuIcon').classList.contains('selectedM')) {
                Menu.changeClass(document.getElementById('menuIcon'));   
            }
        })
    }

}

document.addEventListener('readystatechange', (event) => {
    if (document.readyState === "complete") {
        var mobStyles = document.createElement('link');
        mobStyles.type ="text/css"
        mobStyles.rel = "stylesheet";
        mobStyles.media = "only screen and (max-width: 828px)";
        mobStyles.href = "./styles/ms-ss.css";
        document.getElementsByTagName('head')[0].appendChild(mobStyles);
        
        defFn();    
    }
});


window.addEventListener('resize',(ev) => {
    defFn();
});



import './styles/styles.scss';
import "./styles/scss/fontawesome.scss";
import "./styles/scss/solid.scss";
import './imgs/needpix_com_edited_image.png';

export default function defFn (){
    let menu = menuIcon();
    let outOfMenu = closeMenu();
}

document.addEventListener('readystatechange', (event) => {
    if (document.readyState === "complete") {
        defFn();    
    }
});

//opened and closed menu icons
function menuIcon() {
    document.getElementById('menu-btn').addEventListener('change', (e) => {
        if (e.target.checked) {
            console.log('checked')
            document.getElementById('down').style.display = "none";
            document.getElementById('right').style.display = "block";
        } else {
            console.log('unchecked')
            document.getElementById('down').style.display = "block";
            document.getElementById('right').style.display = "none";
        }
    });
}

//close menu if clicked out of bounds
function closeMenu() {
    window.addEventListener('click', (e) => {
        if (e.clientY > 100){
            document.getElementById('menu-btn').click();
        }
    });
}
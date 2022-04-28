import LocalStorage from '../../utils/LocalStorage.js';

import HeaderStyles from "../../../CSS/App/Header.css"  assert { type: 'css' };
import MainStyles from "../../../CSS/App/Main.css"  assert { type: 'css' };

const GlobalStyles = [ HeaderStyles, MainStyles];
document.adoptedStyleSheets = [ ...GlobalStyles , ...document.adoptedStyleSheets ];

const HeaderAPP = () => {

    const logo = document.createElement("img");
    logo.classList.add("header__app--logo");
    logo.src = "https://i.ibb.co/mCFzdsZ/Marvel-Logo.png";
    logo.alt = "Marvel";    

    const logOut = document.createElement("button");
    logOut.classList.add("header__app--logout");
    logOut.innerHTML = "Cerrar Sesión";
    logOut.addEventListener("click", () => {
        const data = LocalStorage().get('MCU');
        delete data.login;
        LocalStorage().set('MCU', data);
        window.location.reload();
    });


    const Header = document.createElement('header');
    Header.classList.add('header__app');
    Header.append(logo, logOut);

    return Header;
}

export default HeaderAPP;
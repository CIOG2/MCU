import Login from "../login/index.js";

const HomeHeader = () => {
    const logo = document.createElement("img");
    logo.classList.add("Home__header--logo");
    logo.src = "https://i.ibb.co/mCFzdsZ/Marvel-Logo.png";

    const loginButton = document.createElement("button");
    loginButton.classList.add("Home__header--login");
    loginButton.textContent = "Iniciar Sesión";
    loginButton.addEventListener("click", () => {
        document.getElementById("app").append(Login());
    });

    const header = document.createElement("header");
    header.classList.add("Home__header");
    header.append( logo, loginButton);


    return header;
}

export default HomeHeader;
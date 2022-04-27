import LoginValidation from "../../utils/LoginValidation.js";
const Login = () => {

    const textoInicioSecion = document.createElement('h2');
    textoInicioSecion.classList.add('Login__form__title');
    textoInicioSecion.textContent = 'Iniciar Sesión';

    const labelEmail = document.createElement('label');
    labelEmail.textContent = 'Correo electrónico';  
    labelEmail.setAttribute('for', 'email');
    labelEmail.classList.add('login__form--label');

    const email = document.createElement('input');
    email.setAttribute('type', 'email');
    email.setAttribute('autocomplete', 'on');
    email.classList.add('login__form--input');
    email.id = 'email-login';
    email.addEventListener('focus', () => {
        labelEmail.style.fontSize = '1.4rem';
        labelEmail.style.top = '0px';
        containerEmail.style.justifyContent = 'flex-start';
        containerEmail.style.backgroundColor = '#454545';
    });

    const containerEmail = document.createElement('div');
    containerEmail.classList.add('login__form--container');
    containerEmail.append(labelEmail, email);


    // Password
    const labelPassword = document.createElement('label');
    labelPassword.textContent = 'Contraseña';  
    labelPassword.setAttribute('for', 'password');
    labelPassword.classList.add('login__form--label');

    const password = document.createElement('input');
    password.setAttribute('type', 'password');
    password.setAttribute('autocomplete', 'on');
    password.classList.add('login__form--input');
    password.id = 'password-login';
    password.addEventListener('focus', () => {
        labelPassword.style.fontSize = '1.4rem';
        labelPassword.style.top = '0px';
        password.style.justifyContent = 'flex-start';
        password.style.backgroundColor = '#454545';
    });

    const containerPassword = document.createElement('div');
    containerPassword.classList.add('login__form--container');
    containerPassword.append(labelPassword, password);



    const botonIniciarSesion = document.createElement('button');
    botonIniciarSesion.classList.add('login__form--button');
    botonIniciarSesion.textContent = 'Iniciar Sesión';
    botonIniciarSesion.type = 'button';
    botonIniciarSesion.addEventListener('click', () => {
        LoginValidation();
    });


    const checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    checkbox.id = 'remember-me';


    const labelCheckbox = document.createElement('label');
    labelCheckbox.setAttribute('for', 'remember');
    labelCheckbox.textContent = 'Recordarme';
    labelCheckbox.classList.add('login__form--label-checkbox');
    
    const containerCheckbox = document.createElement('div');
    containerCheckbox.classList.add('login__form--container-checkbox');
    containerCheckbox.append(checkbox, labelCheckbox);

    const createAccount = document.createElement('h3');
    createAccount.classList.add('login__form--create-account');
    createAccount.textContent = 'Crear cuenta';
    createAccount.addEventListener('click', () => {
        const modalLogin = document.getElementById('container-login');
        document.getElementById("container-main-elements").style.opacity = "1";
        modalLogin.remove();
        document.getElementById("button-join").classList.add('button-join-active');
        setTimeout(() => {
            document.getElementById("button-join").classList.remove('button-join-active');
        }, 3000);
    })
    
    const contenedorRemenberme = document.createElement('div');    
    contenedorRemenberme.classList.add('login__form--container-remenberme');
    contenedorRemenberme.append(containerCheckbox, createAccount);

    const backHome = document.createElement('p');
    backHome.classList.add('login__form--back-home');
    backHome.textContent = 'Volver al inicio';
    backHome.addEventListener('click', () => {
        const modalLogin = document.getElementById('container-login');
        document.getElementById("container-main-elements").style.opacity = "1";
        modalLogin.remove();
    });

    const form = document.createElement("form");
    form.classList.add("Login__form");
    form.append( textoInicioSecion, containerEmail, containerPassword, botonIniciarSesion, contenedorRemenberme, backHome);


    const containerLogin = document.createElement('div');
    containerLogin.classList.add('container__login');
    containerLogin.id = 'container-login';
    containerLogin.append(form);

    return containerLogin;
}

export default Login;   
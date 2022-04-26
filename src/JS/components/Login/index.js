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
        console.log('Iniciar Sesión');
    });



    const form = document.createElement("form");
    form.classList.add("Login__form");
    form.append( textoInicioSecion, containerEmail, containerPassword, botonIniciarSesion );


    const containerLogin = document.createElement('div');
    containerLogin.classList.add('container__login');
    containerLogin.id = 'container-login';
    containerLogin.append(form);

    return containerLogin;
}

export default Login;   
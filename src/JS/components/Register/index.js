const Register = () => {

    const title = document.createElement('h1');
    title.textContent = 'Registro';
    title.classList.add('form__register--title');

    const inputName = document.createElement('input');
    inputName.type = 'text';
    inputName.name = 'name';
    inputName.placeholder = 'Nombre';
    inputName.classList.add('form__register--input');

    const inputLastName = document.createElement('input');
    inputLastName.type = 'text';
    inputLastName.name = 'lastName';
    inputLastName.placeholder = 'Apellido';
    inputLastName.classList.add('form__register--input');

    const inputEmail = document.createElement('input');
    inputEmail.type = 'email';
    inputEmail.name = 'email';
    inputEmail.placeholder = 'Email';
    inputEmail.classList.add('form__register--input');

    const inputPassword = document.createElement('input');
    inputPassword.type = 'password';
    inputPassword.name = 'password';
    inputPassword.placeholder = 'Contraseña';
    inputPassword.classList.add('form__register--input');

    const inputPasswordConfirm = document.createElement('input');
    inputPasswordConfirm.type = 'password';
    inputPasswordConfirm.name = 'passwordConfirm';
    inputPasswordConfirm.placeholder = 'Confirmar contraseña';
    inputPasswordConfirm.classList.add('form__register--input');

    const buttonRegister = document.createElement('button');
    buttonRegister.textContent = 'Registrarse';
    buttonRegister.classList.add('form__register--button');
    buttonRegister.id = 'button-register';
    buttonRegister.type = 'button';


    const backHome = document.createElement('p');
    backHome.textContent = 'Volver al inicio';
    backHome.classList.add('form__register--back');
    backHome.addEventListener('click', () => {
        const modalLogin = document.getElementById('container-register');
        document.getElementById("container-main-elements").style.opacity = "1";
        modalLogin.remove();
    });

    const form = document.createElement('form');
    form.classList.add('form__register');
    form.id = 'form-register';
    form.append(title, inputName, inputLastName, inputEmail, inputPassword, inputPasswordConfirm, buttonRegister, backHome);

    const container = document.createElement('div');
    container.classList.add('container__register');
    container.id = 'container-register';
    container.append(form);
    


    return container;
}


export default Register;
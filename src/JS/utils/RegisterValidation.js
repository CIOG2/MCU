import LocalStorage from "./LocalStorage.js";

const RegisterValidation = () => {

    const name = document.getElementById('input-Name').value;
    const email = document.getElementById('input-Email').value.toLowerCase();
    const emailConfirmation = document.getElementById('input-Email-Confirmation').value.toLowerCase();
    const password = document.getElementById('input-Password').value;
    const passwordConfirm = document.getElementById('input-Password-Confirm').value; 



    if (name === '' || email === '' || emailConfirmation === '' || password === '' || passwordConfirm === '') {
        swal('¿A donde tan rapido?', 'Todos los campos son obligatorios', 'error');
    } else if (email !== emailConfirmation) {
        swal('Algo anda mal', 'Tus correos no coinciden', 'error');
    }  else if (!validationPassword(password)) {
        swal('¿Enserio pondrias eso?', 'Tu contraseña de tener una letra mayuscula, una minuscula un número y minimo 8 digitos', 'error');
    }else{
        if (!validationEmail(email) ) {
            swal('¿Seguro que ese es tu correo?', 'Prueba con algo mas moderno', 'error');
        } 
        else if(password.length <= 8) {
            swal('Prueba con algo mas seguro', 'La contraseña minimo debe de terner 8 caracteres', 'error');
        } 
        else if (password !== passwordConfirm) {
            swal('Algo anda mal', 'Tus contraseñas no coinciden', 'error');
        } 
        else if (emailRegistered(email)) {
            swal('Ya tienes una cuenta', 'Este correo ya está registrado', 'error');
        } 
        else if (name.length <= 3) {
            swal('¿Que tal algo mas creativo?', 'El nombre debe tener más de 3 caracteres', 'error');
        } else {
            let data = LocalStorage().get('MCU');
            if (data === null) {
                data = {users: []};
            }
            
            const newData = data;
            newData.users.push({
                name: name,
                email: email,
                password: password,
            });
        
            LocalStorage().set('MCU', newData);
            document.getElementById('container-register').remove();
            
            document.getElementById('login-Button').classList.add('button-join-active');
            setTimeout(() => {
                document.getElementById('login-Button').classList.remove('button-join-active');
                document.getElementById('login-Button').click();
            }, 3000);        
        }
    }
}


const validationEmail = (value) => {
    if (/^\w+([\.-]?\w+)*@(?:|hotmail|outlook|yahoo|live|gmail)\.(?:|com|es)+$/.test(value)) {
        return true;
    } else {
        return false;
    }
}

const validationPassword = (value) => {
    if (/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/.test(value)) {
        return true;
    } else {
        return false;
    }
}

const emailRegistered = (value) => {
    let data = LocalStorage().get('MCU');
    if (data === null) {
        return false;
    }

    for (let i = 0; i < data.users.length; i++) {
        if (data.users[i].email === value) {
            return true;
        }
    }
}

export default RegisterValidation;
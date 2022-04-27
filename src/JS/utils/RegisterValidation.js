import LocalStorage from "./LocalStorage.js";

const RegisterValidation = () => {

    const name = document.getElementById('input-Name').value;
    const email = document.getElementById('input-Email').value.toLowerCase();
    const emailConfirmation = document.getElementById('input-Email-Confirmation').value.toLowerCase();
    const password = document.getElementById('input-Password').value;
    const passwordConfirm = document.getElementById('input-Password-Confirm').value; 


    if (name === '' || email === '' || emailConfirmation === '' || password === '' || passwordConfirm === '') {
        alert('Todos los campos son obligatorios');
    } else if (email !== emailConfirmation) {
        alert('Los emails no coinciden');
    }  else if (!validationPassword(password)) {
        alert('La contraseña debe tener al menos una letra mayuscula, una minuscula     |y un número');
    }else{
        if (!validationEmail(email) ) {
            alert('El email no es valido');
        } 
        else if(password.length <= 8) {
            alert('La contraseña debe tener más de 8 caracteres');
        } 
        else if (password !== passwordConfirm) {
            alert('Las contraseñas no coinciden');
        } 
        else if (emailRegistered(email)) {
            alert('El email ya está registrado');
        } 
        else if (name.length <= 3) {
            alert('El nombre debe tener más de 3 caracteres');
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
            alert('Registro exitoso');
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
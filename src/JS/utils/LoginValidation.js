import LocalStorage from "./LocalStorage.js";

const LoginValidation = () => {
    let email = document.getElementById("email-login").value.toLowerCase();
    let password = document.getElementById("password-login").value;
    let rememberMe = document.getElementById("remember-me").checked;

    
    if (email === "" || password === "") {
        swal("¿A donde tan rapido?", "Tienes que poner tus datos primero", "error");
    } else {
        let data = LocalStorage().get('MCU');
        if (data) {
            let users = data.users;
            let user = users.find(user => user.email === email && user.password === password);
            if (user) {
                swal("¡Bienvenido!", "Has iniciado sesión correctamente", "success");
                let login = {
                    email: email,
                    rememberMe: rememberMe
                }
                let newData = {
                    login: login,
                    users: data.users
                };

                LocalStorage().set('MCU', newData);
            } else {
                swal("Correo Incorrecto", "¿Ya tienes una cuenta?", "error");
            }
        } else {
            swal("Correo Incorrecto", "¿Ya tienes una cuenta?", "error");
        }
    }
}

export default LoginValidation;
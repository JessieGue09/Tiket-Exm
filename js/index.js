var elemLoginButton = document.getElementById("login_button"); //el boton
console.log(elemLoginButton);


//Constantes centrales
const ERROR_MESSAGE_ELEMENT_CLASS = "user_message";


var ValidMessage = false;

elemLoginButton.onclick = function () {
    console.log("Login button cliked!");  //comprobar que el boton sirve


    function showMessage(message, isError) { 
        var elemPreviousMessage = document.getElementById(ERROR_MESSAGE_ELEMENT_CLASS);


        //Borrar mensaje anterior en caso de existir
        if (elemPreviousMessage) {
            elemPreviousMessage.parentNode.removeChild(elemPreviousMessage);
        }

        //Crear mensaje
        var elemMessage = document.createElement("p");
        elemMessage.innerText = message;
        elemMessage.id = ERROR_MESSAGE_ELEMENT_CLASS;
        if (isError) {
            elemMessage.className = "error-message";
        }


        //Mostrar mensaje
        var elemMain_div = document.getElementById("main_div");
        elemMain_div.appendChild(elemMessage);


    }


    var elemUsername = document.getElementById("username"); //nombre
    console.log(elemUsername);

    var elemEmail = document.getElementById("email"); //email
    console.log(elemEmail);

    var username = elemUsername.value;
    console.log(username);

    var email = elemEmail.value;
    console.log(email);


    //condicionantes
    if (username === " " && email === " ") {
        showMessage("Enter a valid text", true);

    } else if (username === "") {
        showMessage("Enter a valid user name", true);
    }

    else if (email === "") {
        showMessage("Enter a valid email", true);
    }

    else {
        showMessage("Welcome! Your data has been sent", true);

    }
}
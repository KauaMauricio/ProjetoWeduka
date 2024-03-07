
var btnSignin = document.querySelector("#signin");
var btnSignup = document.querySelector("#signup");

var body = document.querySelector("body");


btnSignin.addEventListener("click", function () {
   body.className = "sign-in-js"; 
});

btnSignup.addEventListener("click", function () {
    body.className = "sign-up-js";
})


function verificarLetras() {
    // Obtém o valor do input
    let inputValor = document.getElementById("letras").value;

    // Expressão regular para verificar se contém somente letras
    let regex = /^[A-Za-z]+$/;

    // Verifica se o valor corresponde à expressão regular
    if (regex.test(inputValor)) {
        document.getElementById("resultado").textContent = "Login realizado com sucesso.";
    } else {
        document.getElementById("resultado").textContent = "O campo "/nome/" contém caracteres não permitidos.";
    }
}
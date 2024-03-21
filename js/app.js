var btnSignin = document.querySelector("#signin");
var btnSignup = document.querySelector("#signup");
var body = document.querySelector("body");
var checklistHTML = "";

btnSignin.addEventListener("click", function () {
   body.className = "sign-in-js"; 
});

btnSignup.addEventListener("click", function () {
    body.className = "sign-up-js";
});


document.getElementById("letras").addEventListener("input", verificarNome);

function verificarNome() {
    let nomeValor = document.getElementById("letras").value;

    let checklist = [];
    let regex = /^\p{L}+$/u;


    if (!regex.test(nomeValor)) { 
        checklist.push("O campo nome não pode conter números, espaços ou caractéres especiais.");
    }

    if (nomeValor.length <= 5) {
        checklist.push("O nome deve conter mais de 5 caractéres.");
    }

    let checklistHTML = "<ul class='checklist'>";

    if (checklist.length === 0) {
        document.getElementById("resultadoNome").innerHTML = "Nome válido.";
        document.getElementById("resultadoNome").style.color = "green";
        document.getElementById("resultadoNome").classList.add("valid-password");
    } else {
        for (var i = 0; i < checklist.length; i++) {
            checklistHTML += "&#10006; " + checklist[i] + "<br>";
        }
        document.getElementById("resultadoNome").innerHTML = checklistHTML;
        document.getElementById("resultadoNome").style.color = "red";
        document.getElementById("resultadoNome").classList.remove("valid-password");
    }
}


document.getElementById("email").addEventListener("input", verificarEmail);

function verificarEmail() {
    let emailValor = document.getElementById("email").value;

    let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let checklist = [];


    if (!regex.test(emailValor)) {
        checklist.push("Por favor ensira um email válido.");
    }

    let checklistHTML = "<ul class='checklist'>"; 

    if (checklist.length === 0) {
        document.getElementById("resultadoEmail").innerHTML = "E-mail válido.";
        document.getElementById("resultadoEmail").style.color = "green";
        document.getElementById("resultadoEmail").classList.add("valid-password");
    } else {
        for (var i = 0; i < checklist.length; i++) {
            checklistHTML += "&#10006; " + checklist[i] + "<br>";
        }
        document.getElementById("resultadoEmail").innerHTML = checklistHTML;
        document.getElementById("resultadoEmail").style.color = "red";
        document.getElementById("resultadoEmail").classList.remove("valid-password");
    }
}


document.getElementById("senha").addEventListener("input", verificarSenha);

function verificarSenha() {
    let senhaValor = document.getElementById("senha").value;

    let checklist = [];

    if (senhaValor.length <= 5) {
        checklist.push("A senha deve conter mais de 5 caracteres.");
    }

    let symbolRegex = /[\W_]/;
    if (!symbolRegex.test(senhaValor)) {
        checklist.push("A senha deve conter pelo menos um símbolo.");
    }

    let numberRegex = /\d/;
    if (!numberRegex.test(senhaValor)) {
        checklist.push("A senha deve conter pelo menos um número.");
    }

    let uppercaseRegex = /[A-Z]/;
    if (!uppercaseRegex.test(senhaValor)) {
        checklist.push("A senha deve conter pelo menos uma letra maiúscula.");
    }

    let checklistHTML = "<ul class='checklist'>"; 

    if (checklist.length === 0) {
        document.getElementById("resultadoSenha").innerHTML = "Senha válida.";
        document.getElementById("resultadoSenha").style.color = "green";
        document.getElementById("resultadoSenha").classList.add("valid-password");
    } else {
        for (var i = 0; i < checklist.length; i++) {
            checklistHTML += "&#10006; " + checklist[i] + "<br>";
        }
        document.getElementById("resultadoSenha").innerHTML = checklistHTML;
        document.getElementById("resultadoSenha").style.color = "red";
        document.getElementById("resultadoSenha").classList.remove("valid-password");
    }
}


function verificarLetras() {
    let inputValor = document.getElementById("letras").value;
    let regex = /^[A-Za-z]+$/;

    if (regex.test(inputValor)) {
        console.log("Cadastro realizado com sucesso.");
    } else {
        console.log("Erro ao cadastrar usuário.");
    }
}
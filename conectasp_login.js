const formulario = document.querySelector(".card-login form");

formulario.addEventListener("submit", function(event) {

    event.preventDefault();

    const emailCpf = document.getElementById("email").value.trim();
    const senha = document.getElementById("senha").value.trim();

    if (emailCpf === "") {
        document.getElementById("message").textContent = "Digite seu e-mail ou CPF.";
        return;
    }

    if (senha === "") {
        document.getElementById("message").textContent = "Digite sua senha.";
        return;
    }

    if (emailCpf.includes("@")) {

        if (!emailCpf.includes(".")) {
            document.getElementById("message").textContent = "Digite um Email válido.";
            return;
        }

    } else {

        const cpf = emailCpf.replace(/\D/g, "");

        if (cpf.length !== 11) {
            document.getElementById("message").textContent = "Digite um CPF válido.";
            return;
        }
    }

    if (senha.length < 6) {
        document.getElementById("message").textContent = "A senha deve ter pelo menos 6 caracteres.";
        return;
    }

    alert("Login realizado com sucesso!");
});
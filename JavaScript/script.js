const button = document.querySelector("#calcular");
const imc = document.querySelector("#imc");

function calcularImc(e) {
    const peso = document.querySelector("#peso").value;
    const altura = document.querySelector("#altura").value.replace(",", ".");

    if (peso === "" || altura === "") {
        alert("Preencha os campos necessários!");
    } else {
        const resultadoImc = peso / (altura * altura);
        if (resultadoImc === NaN) {
            alert("Digite somente Números!");
        } else {
            const paragrafo = document.querySelector("#paragrafo");

            paragrafo.innerText =
                "Seu IMC: " + resultadoImc.toFixed(2).replace(".", ",");

            if (resultadoImc > 40) {
                imc.innerText = "Situação: Obesidade III (mórbida)";
            } else if (resultadoImc >= 35 && resultadoImc <= 39.99) {
                imc.innerText = "Situação: Obesidade II (severa)";
            } else if (resultadoImc >= 30 && resultadoImc <= 34.99) {
                imc.innerText = "Situação: Obesidade I";
            } else if (resultadoImc >= 25 && resultadoImc <= 29.99) {
                imc.innerText = "Situação: Acima do peso";
            } else if (resultadoImc >= 18.5 && resultadoImc <= 24.99) {
                imc.innerText = "Situação: Peso normal";
            } else if (resultadoImc >= 17 && resultadoImc <= 18.49) {
                imc.innerText = "Situação: Peso normal";
            } else {
                imc.innerText = "Situação: Muito abaixo do peso";
            }
        }
    }
}

button.addEventListener("click", calcularImc);

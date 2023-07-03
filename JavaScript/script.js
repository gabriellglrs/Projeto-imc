const button = document.querySelector("#calcular");




const imc = document.querySelector("#imc");

function calcularImc(e) {

    const inputPeso = document.querySelector("#peso")
    const inputAltura = document.querySelector("#altura")

    if (inputPeso.value === "" || inputAltura.value === "") {

        alert('Preencha os espaços em branco!')
        
    } else {

        const peso = inputPeso.value.replace(",", ".");
        const altura = inputAltura.value.replace(",", ".");
    
        const resultadoImc = peso / (altura * altura);

        const verificarNaN = isNaN(resultadoImc);

        if (verificarNaN === true) {
            alert("Digite apenas Números nos campos!");

            inputAltura.value = ''
            inputPeso.value = ''
            

        } else {
            const paragrafo = document.querySelector("#paragrafo");

            paragrafo.innerText =
                "IMC: " + resultadoImc.toFixed(2).replace(".", ",");

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

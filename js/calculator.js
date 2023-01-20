let botaoCalcular = document.getElementById(btn-calcular);

function calcularIMC(){
    let nome = document.getElementById("nome").value;
    let peso = document.getElementById("peso").value;
    let altura = document.getElementById("altura").value/100;
    let resultado = document.getElementById("resultado")

    if(altura !== "" && peso !==""){
        let imc = (peso/(altura*altura)).toFixed(2);
        let mensagem = "";
        if (imc < 18.5){
            mensagem = 'Você está Abaixo do Peso!'
        } else if (imc >= 18.5 && imc < 30){
            mensagem = 'Você está no Peso Ideal!'
        } else if (imc >= 25 && imc < 30){
            mensagem = 'Você está Acima do Peso!'
        } else if (imc >= 30 && imc < 40){
            mensagem = 'Você está com Obesidade!'
        } else{
            mensagem = 'Você está com Obesidade Grave!'
        }
        resultado.textContent = `${nome}, seu IMC é ${imc}. ${mensagem}`;      
    }else{
        resultado.textContent = "Por favor, preencha todos os campos!"
    } 
}

btn-calcular.addEventListener('click',calcularIMC);

<?php
    include_once('includes/header.php');
?>
<form>
    <div id="formulario">
        <h4>Calculadora de IMC <i class="fa-brands fa-nutritionix fa-lg"></i></h4>
        <p>Informe seus dados para o cálculo</p>

        <div class="input-field col s6">
            <label>Nome:</label>
            <input type="text" id="nome"></br>
        </div>
        <div class="input-field col s6">
            <label>Peso (kg):</label>
            <input type="number" id="peso"></br>
        </div>
        <div class="input-field col s6">
            <label>Altura (cm):</label>
            <input type="number" id="altura"></br>
        </div>
        
        <div id="retorno">
            <label>Resultado:</label>
            <div id="resultado"></div>
        </div>
        </br></br>
        <button class="btn green" type="button" id="btn-calcular" onClick="calcularIMC()">Calcular</button>
        <button class="btn red" type="reset" id="btn-limpar">Limpar</button>       
    </div>
</form> 

<?php
    include_once('includes/footer.php');
?>
// calculadora 3
let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");
let select = document.getElementById("select");
let resultado = "";

function borrar() {
    num1.value = "";
    num2.value = "";
    select.selectedIndex = 0;
    document.getElementById("resultado3").value = "";
}

function calcular() {
    let n1 = Number(num1.value);
    let n2 = Number(num2.value);
    let estado = true;

    if (select.value == "/" || select.value == "%") {
        if (n2 <= 0) {
            alert("No se puede dividir entre 0.");
            estado = false;
            borrar();
        } else if (select.value == "/") {
            resultado = n1 / n2;
        } else {
            resultado = n1 % n2;
        }
    }

    switch (select.value) {
        case "+":
            resultado = n1 + n2;
            break;
        case "-":
            resultado = n1 - n2;
            break;
        case "*":
            resultado = n1 * n2;
            break;
    }

    if (estado) {
        document.getElementById("resultado3").value = resultado;
    }
}
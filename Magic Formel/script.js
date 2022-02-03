function generatebmi() {

    let value1 = document.getElementById("gros").value;
    let value2 = document.getElementById("Gewicht").value;
    let result = (value1 / value2) - 3.4;
    console.log(result)
    printvalues(result)
}

function printvalues(result) {

    if (result > 0) {
        let j = "";
        for (let i = 0; i < result; i++) {
            j += i + "<br>";
            document.getElementById("rechts").innerHTML = "Positiv" + " " +
                j + " (" + result + ") ";
            console.log(i)
        }
    } else if (result < 0) {
        let j = "";
        for (i = 0; i > result; i--) {
            j += i - 1 + "<br>";
            document.getElementById("rechts").innerHTML = "Negativ" + " " +
                "0 " + j + " (" + result + ") ";
            console.log(i)
        }
    } else {
        document.getElementById("rechts").innerHTML = "Negativ" + " " +
            console.log(i)
    }




}


/* https://www.w3schools.com/js/tryit.asp?filename=tryjs_loop_for_ex
function printvalues2(result) {

    if (result < 0) {

        for (abstand = result; abstand <= 0; abstand++) {
            console.log(abstand);

        }
        document.getElementById("Ausgabefeld").innerHTML = "Negativ" + " " + abstand;
    } else if (result > 0) {

        for (abstand = result; abstand >= 0; abstand--) {
            console.log(abstand);

        }
        document.getElementById("Ausgabefeld").innerHTML = "Positiv" + " " + abstand;
    } else {

        for (abstand = result; abstand = 0; abstand) {
            console.log(abstand);
        }
        document.getElementById("Ausgabefeld").innerHTML = "NULL" + " " + abstand;
    }

} */
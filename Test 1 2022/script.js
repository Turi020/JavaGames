document.getElementById("button").addEventListener("click", function() {
    giveResult();
});

function giveResult() {
    let number = document.getElementById("textarea").value;

    let rounded = Math.round(number);
    console.log(rounded);
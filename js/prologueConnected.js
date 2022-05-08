function CustomiseBundle() {
    document.getElementById("selectCustomise").style.display = "block"; 
    document.getElementById("selectChoose").style.display = "none";
    document.getElementById("customise_bundle").style.color = "#6D46FF";
    document.getElementById("customise_bundle").style.backgroundColor = "white";
    document.getElementById("choose_bundle").style.color = "#fff";
    document.getElementById("choose_bundle").style.backgroundColor = "#6D46FF";
}
function ChooseBundle() {
    document.getElementById("selectChoose").style.display = "block"; 
    document.getElementById("selectCustomise").style.display = "none";
    document.getElementById("choose_bundle").style.color = "#6D46FF";
    document.getElementById("choose_bundle").style.backgroundColor = "white";
    document.getElementById("customise_bundle").style.color = "#fff";
    document.getElementById("customise_bundle").style.backgroundColor = "#6D46FF";
}

function increaseValue() {
    var value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('number').value = value;
}
function decreaseValue() {
    var value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    value < 1 ? value = 1 : '';
    value--;
    document.getElementById('number').value = value;
}
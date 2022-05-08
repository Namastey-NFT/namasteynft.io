function CustomiseBundle() { document.getElementById("selectCustomise").style.display = "block"; document.getElementById("selectChoose").style.display = "none"; document.getElementById("customise_bundle").style.color = "#6D46FF"; document.getElementById("customise_bundle").style.backgroundColor = "white"; document.getElementById("choose_bundle").style.color = "#fff"; document.getElementById("choose_bundle").style.backgroundColor = "#6D46FF"; }
function ChooseBundle() { document.getElementById("selectChoose").style.display = "block"; document.getElementById("selectCustomise").style.display = "none"; document.getElementById("choose_bundle").style.color = "#6D46FF"; document.getElementById("choose_bundle").style.backgroundColor = "white"; document.getElementById("customise_bundle").style.color = "#fff"; document.getElementById("customise_bundle").style.backgroundColor = "#6D46FF"; }

function increaseValue1() { var value = parseInt(document.getElementById('number1').value, 10); value = isNaN(value) ? 0 : value; value++; document.getElementById('number1').value = value; }
function decreaseValue1() { var value = parseInt(document.getElementById('number1').value, 10); value = isNaN(value) ? 0 : value; value < 1 ? value = 1 : ''; value--; document.getElementById('number1').value = value; }

function increaseValue2() { var value = parseInt(document.getElementById('number2').value, 10); value = isNaN(value) ? 0 : value; value++; document.getElementById('number2').value = value; }
function decreaseValue2() { var value = parseInt(document.getElementById('number2').value, 10); value = isNaN(value) ? 0 : value; value < 1 ? value = 1 : ''; value--; document.getElementById('number2').value = value; }

function increaseValue3() { var value = parseInt(document.getElementById('number3').value, 10); value = isNaN(value) ? 0 : value; value++; document.getElementById('number3').value = value; }
function decreaseValue3() { var value = parseInt(document.getElementById('number3').value, 10); value = isNaN(value) ? 0 : value; value < 1 ? value = 1 : ''; value--; document.getElementById('number3').value = value; }

function increaseValue4() { var value = parseInt(document.getElementById('number4').value, 10); value = isNaN(value) ? 0 : value; value++; document.getElementById('number4').value = value; }
function decreaseValue4() { var value = parseInt(document.getElementById('number4').value, 10); value = isNaN(value) ? 0 : value; value < 1 ? value = 1 : ''; value--; document.getElementById('number4').value = value; }

function increaseValue5() { var value = parseInt(document.getElementById('number5').value, 10); value = isNaN(value) ? 0 : value; value++; document.getElementById('number5').value = value; }
function decreaseValue5() { var value = parseInt(document.getElementById('number5').value, 10); value = isNaN(value) ? 0 : value; value < 1 ? value = 1 : ''; value--; document.getElementById('number5').value = value; }

function increaseValue6() { var value = parseInt(document.getElementById('number6').value, 10); value = isNaN(value) ? 0 : value; value++; document.getElementById('number6').value = value; }
function decreaseValue6() { var value = parseInt(document.getElementById('number6').value, 10); value = isNaN(value) ? 0 : value; value < 1 ? value = 1 : ''; value--; document.getElementById('number6').value = value; }

function clickPremium(){
    document.getElementById('eth_Price').innerHTML ="@2 ETH";
    document.getElementById('eth_PriceGas').innerHTML ="@ 1.7 ETH + gas";
    document.getElementById('Special_bundle').style.backgroundColor = "black";
    document.getElementById('premium_bundle').style.backgroundColor = "#6D46FF";

    document.getElementById('primiumTick').style.display = "flex";
    document.getElementById('primiumUnTick').style.display = "none";
    document.getElementById('specialTick').style.display = "none";
    document.getElementById('specialUnTick').style.display = "flex";

}
function clickSpecial(){
    document.getElementById('eth_Price').innerHTML ="@1 ETH";
    document.getElementById('eth_PriceGas').innerHTML ="@ 0.9 ETH + gas";
    document.getElementById('Special_bundle').style.backgroundColor = "#6D46FF";
    document.getElementById('premium_bundle').style.backgroundColor = "black";

    document.getElementById('specialTick').style.display = "flex";
    document.getElementById('specialUnTick').style.display = "none";
    document.getElementById('primiumTick').style.display = "none";
    document.getElementById('primiumUnTick').style.display = "flex";

}

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

function reset() {
  document.getElementById("number1").value = 0;
  document.getElementById("number2").value = 0;
  document.getElementById("number3").value = 0;
  document.getElementById("number4").value = 0;
  document.getElementById("number5").value = 0;
  document.getElementById("number6").value = 0;
}
var count_total = 0;
// var photoAvailable = 0,
//   TraditionalArtAvailable = 0,
//   digitalArtAvailable = 0,
//   musicAvailable = 0,
//   poetryAvailable = 0,
//   filmAvailable = 0;
// photoAvailable = document.getElementById("Photography-available").innerHTML;
// TraditionalArtAvailable = document.getElementById(
//   "Traditional-art-available"
// ).innerHTML;
// digitalArtAvailable = document.getElementById(
//   "digital-art-available"
// ).innerHTML;
// musicAvailable = document.getElementById("music-available").innerHTML;
// poetryAvailable = document.getElementById("poetry-available").innerHTML;
// filmAvailable = document.getElementById("film-available").innerHTML;

// var numberA = Number(photoAvailable);
// var numberB = Number(TraditionalArtAvailable);
// var numberC = Number(digitalArtAvailable);
// var numberD = Number(musicAvailable);
// var numberE = Number(poetryAvailable);
// var numberF = Number(filmAvailable);

function increaseValue1() {
  var val = Number(document.getElementById("number1").value);
  var numberA = Number(
    document.getElementById("Photography-available").innerHTML
  );
  val = isNaN(val) ? 0 : val;
  console.log("num", numberA);
  if (val <= numberA - 1) {
    val++;
    document.getElementById("number1").value = val;
    count_total++;
  } else {
    count_total += 0;
  }
  console.log(val);
  changeResult();
}
function decreaseValue1() {
  var value = parseInt(document.getElementById("number1").value, 10);
  value = isNaN(value) ? 0 : value;
  value < 1 ? (value = 0) : "";
  if (value > 0) {
    value--;
    count_total--;
    document.getElementById("number1").value = value;
  }
  console.log(value);
  changeResult();
}

function increaseValue2() {
  var value = parseInt(document.getElementById("number2").value, 10);
  var numberB = Number(
    document.getElementById("Traditional-art-available").innerHTML
  );
  value = isNaN(value) ? 0 : value;
  if (value <= numberB - 1) {
    value++;
    document.getElementById("number2").value = value;
    count_total++;
  } else {
    count_total += 0;
  }
  console.log(value);
  changeResult();
}
function decreaseValue2() {
  var value = parseInt(document.getElementById("number2").value, 10);
  value = isNaN(value) ? 0 : value;
  value < 1 ? (value = 0) : "";
  if (value > 0) {
    value--;
    count_total--;
    document.getElementById("number2").value = value;
  }
  console.log(value);
  changeResult();
}

function increaseValue3() {
  var value = parseInt(document.getElementById("number3").value, 10);
  var numberC = Number(
    document.getElementById("digital-art-available").innerHTML
  );
  value = isNaN(value) ? 0 : value;
  if (value <= numberC - 1) {
    value++;
    document.getElementById("number3").value = value;
    count_total++;
  } else {
    count_total += 0;
  }
  console.log(value);
  changeResult();
}
function decreaseValue3() {
  var value = parseInt(document.getElementById("number3").value, 10);
  value = isNaN(value) ? 0 : value;
  value < 1 ? (value = 0) : "";
  if (value > 0) {
    value--;
    count_total--;
    document.getElementById("number3").value = value;
  }
  console.log(value);
  changeResult();
}

function increaseValue4() {
  var value = parseInt(document.getElementById("number4").value, 10);
  var numberD = Number(document.getElementById("music-available").innerHTML);
  value = isNaN(value) ? 0 : value;
  if (value <= numberD - 1) {
    value++;
    document.getElementById("number4").value = value;
    count_total++;
  } else {
    count_total += 0;
  }
  console.log(value);
  changeResult();
}
function decreaseValue4() {
  var value = parseInt(document.getElementById("number4").value, 10);
  value = isNaN(value) ? 0 : value;
  value < 1 ? (value = 0) : "";
  if (value > 0) {
    value--;
    count_total--;
    document.getElementById("number4").value = value;
  }
  console.log(value);
  changeResult();
}

function increaseValue5() {
  var value = parseInt(document.getElementById("number5").value, 10);
  var numberE = Number(document.getElementById("poetry-available").innerHTML);
  value = isNaN(value) ? 0 : value;
  if (value <= numberE - 1) {
    value++;
    document.getElementById("number5").value = value;
    count_total++;
  } else {
    count_total += 0;
  }
  console.log(value);
  changeResult();
}
function decreaseValue5() {
  var value = parseInt(document.getElementById("number5").value, 10);
  value = isNaN(value) ? 0 : value;
  value < 1 ? (value = 0) : "";
  if (value > 0) {
    value--;
    count_total--;
    document.getElementById("number5").value = value;
  }
  console.log(value);
  changeResult();
}

function increaseValue6() {
  var value = parseInt(document.getElementById("number6").value, 10);
  var numberF = Number(document.getElementById("film-available").innerHTML);
  value = isNaN(value) ? 0 : value;
  if (value <= numberF - 1) {
    value++;
    document.getElementById("number6").value = value;
    count_total++;
  } else {
    count_total += 0;
  }
  console.log(value);
  changeResult();
}
function decreaseValue6() {
  var value = parseInt(document.getElementById("number6").value, 10);
  value = isNaN(value) ? 0 : value;
  value < 1 ? (value = 0) : "";
  if (value > 0) {
    value--;
    count_total--;
    document.getElementById("number6").value = value;
  }
  console.log(value);
  changeResult();
}

function clickPremium() {
  document.getElementById("eth_Price").innerHTML = "@2 ETH";
  document.getElementById("eth_PriceGas").innerHTML = "@ 1.7 ETH + gas";
  document.getElementById("Special_bundle").style.backgroundColor = "black";
  document.getElementById("premium_bundle").style.backgroundColor = "#6D46FF";

  document.getElementById("primiumTick").style.display = "flex";
  document.getElementById("primiumUnTick").style.display = "none";
  document.getElementById("specialTick").style.display = "none";
  document.getElementById("specialUnTick").style.display = "flex";
  document.getElementById("qty").value = 8;
}
function clickSpecial() {
  document.getElementById("eth_Price").innerHTML = "@1 ETH";
  document.getElementById("eth_PriceGas").innerHTML = "@ 0.9 ETH + gas";
  document.getElementById("Special_bundle").style.backgroundColor = "#6D46FF";
  document.getElementById("premium_bundle").style.backgroundColor = "black";

  document.getElementById("specialTick").style.display = "flex";
  document.getElementById("specialUnTick").style.display = "none";
  document.getElementById("primiumTick").style.display = "none";
  document.getElementById("primiumUnTick").style.display = "flex";
  document.getElementById("qty").value = 4;
}

function changeResult() {
  document.getElementById("total_artworks").innerHTML = count_total;
  if (count_total <= 4) {
    let ans = 0;
    ans = 0.25 * count_total;
    document.getElementById("find_res_ETH").innerHTML = ans;
  } else {
    let ans = 0;
    ans = 0.225 * count_total;
    ans = ans.toPrecision(4);
    document.getElementById("find_res_ETH").innerHTML = ans;
  }
}

let celsius = document.getElementById("celsius");
let fahrenheit = document.getElementById("fahrenheit");
let kelvin = document.getElementById("Kelvin")

function celToFarandKel()
{
    let cTemp = parseFloat(celsius.value);
    let fTemp = (cTemp *(9/5)+35);
    let kTemp = cTemp + 273.15;
    fahrenheit.value = parseFloat( fTemp.toFixed(2));
    kelvin.value = parseFloat( kTemp.toFixed(2));
}

function farToCelandKel(){
    let fTemp = parseFloat(fahrenheit.value);
    let cTemp = ((fTemp - 32) * (5/9));
    let kTemp = ((fTemp -32) * (5/9) + 273.15);
    celsius.value = parseFloat( cTemp.toFixed(2));
    kelvin.value = parseFloat( kTemp.toFixed(2));
}

function KelToCelandfah(){
    let kTemp = parseFloat(kelvin.value);
    let cTemp = kTemp - 273.15;
    let fTemp = ((kTemp - 273.15) * (9/5) + 32);
    celsius.value = parseFloat( cTemp.toFixed(2));
    fahrenheit.value = parseFloat( fTemp.toFixed(2));
    console.log(output);
}
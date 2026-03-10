const textbox = document.getElementById("tempInput");
const toFahrenheit = document.getElementById("toFahrenheit");
const toCelsius = document.getElementById("toCelsius");
const result = document.getElementById("result");
let temp;
function convertTemperature() {
    if(toFahrenheit.checked) {
        temp = parseFloat(textbox.value);
        temp = (temp * 9/5) + 32;
        result.textContent = temp.toFixed(2) + " °F";
}
    else if(toCelsius.checked) {
        temp = parseFloat(textbox.value);
        temp = (temp - 32) * 5/9;
        result.textContent = temp.toFixed(2) + " °C";
    }
    else {
        result.textContent = "Please select a conversion type.";
    }   
}

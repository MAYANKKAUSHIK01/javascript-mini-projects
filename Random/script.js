
const myButton = document.getElementById("random");
const randomNumberLabel = document.getElementById("randomNumber");
const min=Number(window.prompt("Enter the minimum value:"));
const max=Number(window.prompt("Enter the maximum value:"));
document.getElementById("minLabel").textContent="Minimum Value: "+min;  
document.getElementById("maxLabel").textContent="Maximum Value: "+max;
myButton.onclick = function() {
    const randomNumber = Math.floor(Math.random() * max) + min;
    randomNumberLabel.textContent = "Random Number: " + randomNumber;
};
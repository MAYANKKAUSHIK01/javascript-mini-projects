const decrementButton = document.getElementById('decrement');
const incrementButton = document.getElementById('increment');
const resetButton = document.getElementById('reset');
const countLabel = document.getElementById('countlabel');
let count = 0;

 updateCount();

function updateCount() {
  countLabel.textContent = count;
}
incrementButton.onclick = function() {
  count++;
  updateCount();
};

decrementButton.onclick = function() {
  count--;
  updateCount();
};

resetButton.onclick = function() {
  count = 0;
  updateCount();
};
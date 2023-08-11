function counter() {
  var _counter = 0;

  function add(increment) {
    _counter += increment;
  }

  function retrieve() {
    return _counter;
  }

  return {
    add,
    retrieve,
  };
}

const c = counter();

const counterElement = document.getElementById('counter');
const incrementButton = document.getElementById('incrementBtn');

incrementButton.addEventListener('click', function() {
    alert(c.retrieve());
});

// Update the counter element's content
function updateCounterDisplay() {
    counterElement.textContent = c.retrieve();
}

updateCounterDisplay(); // Initial update

// For demonstration purposes, add values on each button click
incrementButton.addEventListener('click', function() {
    c.add(1);
    updateCounterDisplay();
});

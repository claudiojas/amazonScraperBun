export function setupCounter(element: HTMLButtonElement) {
  let counter = 0; // Initializes the counter with 0

  // Defines a function to update the counter and display its value on the button
  const setCounter = (count: number) => {
    counter = count; // Updates the counter's value
    element.innerHTML = `count is ${counter}`; // Sets the button text to show the current counter value
  };

  // Adds a click event listener to the button to increment the counter
  element.addEventListener('click', () => setCounter(counter + 1));

  // Sets the initial counter value to 0 and displays it on the button
  setCounter(0);
}

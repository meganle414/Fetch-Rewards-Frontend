/**
 * Upon loading the HTML, retrieve occupations and states from the form URL
 * by sending a GET request. Converts the JSON into a JSObject to populate
 * the occupations and states dropdown menu.
 *
 * @return {}
 */
let main = () => {
  // Proxy server because of CORS restriction
  // Send a GET request to the specified URL to retrieve JSON data
  const url = "http://cors-anywhere.herokuapp.com/https://frontend-take-home.fetchrewards.com/form";

  fetch(url)
  .then(response => response.json())
  .then(data => {
    // Assign the JSON data to JSObject
    const jsObject = data;
    const occupationsJSON = jsObject.occupations;
    const statesJSON = jsObject.states;

    // Populate occupations dropdown menu
    const occupationsDropdown = document.querySelector("#occupation");
    for (let i of occupationsJSON) {
      const option = new Option(i);
      occupationsDropdown.add(option);
    }

    // Populate states dropdown menu
    const statesDropdown = document.querySelector("#state");
    statesJSON.forEach(({ name, abbreviation }) => {
      const option = new Option(name, abbreviation);
      statesDropdown.add(option);
    });
  })
  .catch(error => console.error(error));
}

/**
 * On form submission, converts form input values into a JSObject, then
 * converts that JS object into a JSON and sends a POST request to the form
 * URL with that JSON.
 * Prints a message saying "Data sent successfully!" and receive a 201 status
 * message upon successful POST request.
 *
 * @return {}
 */
let sendData = () => {
  // Get the values of the form inputs
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const occupation = document.getElementById("occupation").value;
  const state = document.getElementById("state").value;

  // Create a JavaScript object with the form data
  const formData = {
    name: name,
    email: email,
    password: password,
    occupation: occupation,
    state: state
  };

  // Convert the object to a JSON
  const jsonData = JSON.stringify(formData);

  // Send a POST request to the specified URL with the JSON data
  const url = "http://cors-anywhere.herokuapp.com/https://frontend-take-home.fetchrewards.com/form";

  fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: jsonData
  })
  .then(response => {
    console.log("Data sent successfully!");

  })
  .catch(error => {
    console.error("Error sending data:", error);
  });
}

/**
 * On form submission, remove the "form" element and give user thank you message.
 *
 * @return {}
 */
let formSubmission = () => {
  document.getElementById("form").remove();
  document.getElementById("thank-you").removeAttribute("hidden");
}

/**
 * Enables clicking the submit button when all input fields are filled in.
 * This function is called upon key release of an input field.
 *
 * @return {boolean} whether submission button is disabled or not
 */
let enableSubmit = () => {
  // Get the values of the form inputs and form submit button
  let inputs = document.getElementsByClassName("required");
  let btn = document.querySelector('input[type="button"]');
  let isValid = true;

  // Check if the inputs were changed. If input is still blank/null, exit.
  for (var i = 0; i < inputs.length; i++) {
    let changedInput = inputs[i];
    if (changedInput.value.trim() === "" || changedInput.value === null) {
      isValid = false;
      break;
    }
  }

  btn.disabled = !isValid;
}


main();
function validateSyntax() {
  let input = document.getElementById("petInput").value;
  // Validation logic goes here
  let result = ""; // Placeholder for validation result

  // TODO: Write your validation logic here
  // Check if input starts with 'pet_' and followed by alphanumeric characters

  document.getElementById("result").innerText = result;
}

//declaration of regular expression

const syntaxPattern = /[pet_]{4}[0-9]{4}[A-Za-z]{3,}/g;

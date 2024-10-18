function validateSyntax() {
  let input = document.getElementById("petInput").value;
  // Validation logic goes here
  // Placeholder for validation result
  let result = "";

  validationChecker(input, syntaxPattern);
}

//declaration of regular expression

const syntaxPattern = /[pet_]{4}[0-9]{4}[A-Za-z]{3,}/g;

function validationChecker(input, regex) {
  //comment console in/out to use to check true and false of function
  //console.log(regex.test(input))

  //declaration for result
  let result = document.getElementById("result");

  if (regex.test(input)) {
    //console.log('true');
    result.innerHTML = "Valid Syntax \u{1f7e2}";
  } else {
    //console.log('false');
    result.innerHTML = "Invalid Syntax \u{1f534}";
  }
}

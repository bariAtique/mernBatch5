function checkAge() {
  // Get the entered age from the input field
  var age = document.getElementById("ageInput").value;

  // Get the result card element
  var resultCard = document.getElementById("resultCard");

  // Check if age is greater than or equal to 18
  if (age >= 18) {
    resultCard.innerHTML = "<h2>You are an adult</h2>";
  } else {
    resultCard.innerHTML = "<h2>You are a child</h2>";
  }

  // Display the result card
  resultCard.style.display = "block";
}
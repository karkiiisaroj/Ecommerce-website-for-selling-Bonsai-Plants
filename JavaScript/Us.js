// Function to show or hide the portfolio content of 'arbit'
function arbit() {
    // Get the portfolio content with id 'arbit'
    var portfolioContent = document.getElementById("arbit");
    
    // Check if the portfolio content is currently hidden
    if (portfolioContent.style.display === "none") {
        // If it's hidden, show it
        portfolioContent.style.display = "block";
    } else {
        // If it's not hidden, hide it
        portfolioContent.style.display = "none";
    }
}

// Function to show or hide the portfolio content of 'Saroj'
function saroj() {
    // Get the portfolio content with id 'Saroj'
    var portfolioContent = document.getElementById("Saroj");
    
    // Check if the portfolio content is currently hidden
    if (portfolioContent.style.display === "none") {
        // If it's hidden, show it
        portfolioContent.style.display = "block";
    } else {
        // If it's not hidden, hide it
        portfolioContent.style.display = "none";
    }
}

// Function to show or hide the portfolio content of 'apil'
function apil() {
    // Get the portfolio content with id 'apil'
    var portfolioContent = document.getElementById("apil");
    
    // Check if the portfolio content is currently hidden
    if (portfolioContent.style.display === "none") {
        // If it's hidden, show it
        portfolioContent.style.display = "block";
    } else {
        // If it's not hidden, hide it
        portfolioContent.style.display = "none";
    }
}

// Function to show or hide the portfolio content of 'shreyansh'
function shreyansh() {
    // Get the portfolio content with id 'shreyansh'
    var portfolioContent = document.getElementById("shreyansh");
    
    // Check if the portfolio content is currently hidden
    if (portfolioContent.style.display === "none") {
        // If it's hidden, show it
        portfolioContent.style.display = "block";
    } else {
        // If it's not hidden, hide it
        portfolioContent.style.display = "none";
    }
}

// Function to submit user feedback
function submitFeedback() {
    // Get the feedback entered by the user
    var feedback = document.getElementById("feedback").value;
    
    // Check if the user entered any feedback
    if (feedback === "") {
      // If not, show an alert to prompt the user
      alert("Please enter your feedback before submitting.");
    } else {
      // If yes, show an alert with the user's feedback
      alert("Thank you for your feedback: " + feedback);
    }
  }
  
  // Add an event listener to the 'submit' button to run the submitFeedback function when clicked
  document.querySelector('.submit').addEventListener("click", submitFeedback);

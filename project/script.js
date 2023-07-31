document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();
  
    // Get the form values
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
  
    // Perform simple validation (you can customize this based on your requirements)
    if (username === "") {
      alert("Please enter your username.");
    } else if (password === "") {
      alert("Please enter your password.");
    } else {
      // If the form is valid, you can perform further actions like submitting the form to a server.
      // For this example, we'll just log the successful login message.
      console.log("Login successful! Username: " + username);
    }
  });
  
const { ClientController } = require('../controllers/clientController');

document.getElementById("loginForm").addEventListener("submit", async function(e) {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    const response = await fetch("http://localhost:3000/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password })
    });

    if (!response.ok) {
      throw new Error("Invalid email or password!");
    }

    const data = await response.json();
    alert(`✅ Login successful! Welcome back, ${data.name}!`);
    localStorage.setItem("loggedInUser", JSON.stringify(data));
    window.location.href = "index.html";
  } catch (err) {
    alert("❌ " + err.message);
  }
});

module.exports = ClientController;

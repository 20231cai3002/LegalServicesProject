document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const users = JSON.parse(localStorage.getItem("users") || "[]");
  const user = users.find(u => u.email === email && u.password === password);

  if (user) {
    alert(`✅ Login successful! Welcome back, ${user.name}!`);
    localStorage.setItem("loggedInUser", JSON.stringify(user));
    window.location.href = "index.html"; // Redirect to homepage
  } else {
    alert("❌ Invalid email or password!");
  }
});

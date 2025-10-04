document.getElementById("signupForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const role = document.getElementById("role").value;
  const password = document.getElementById("password").value;

  if (!name || !email || !role || !password) {
    alert("Please fill all fields!");
    return;
  }

  // Save user info in localStorage
  const users = JSON.parse(localStorage.getItem("users") || "[]");
  users.push({ name, email, role, password });
  localStorage.setItem("users", JSON.stringify(users));

  alert(`🎉 Signup successful! Welcome, ${name}!`);
  window.location.href = "login.html";
});

// ---------------------- Get Data Function ----------------------
function getData() {
  let users = localStorage.getItem("users");
  if (!users) {
    return [];
  } else {
    return JSON.parse(users);
  }
}

// ---------------------- Sign Up Function ----------------------
function register() {
  const nameVal = document.getElementById("name").value.trim();
  const emailVal = document.getElementById("email").value.trim().toLowerCase();
  const passwordVal = document.getElementById("password").value.trim();

  if (!nameVal || !emailVal || !passwordVal) {
    Swal.fire("Please fill in all fields.");
    return;
  }

  let users = getData();

  // Check if email already exists
  const isExist = users.some(user => user.email === emailVal);
  if (isExist) {
    Swal.fire("This email is already registered. Please log in.");
    return;
  }

  const userDetails = {
    name: nameVal,
    email: emailVal,
    password: passwordVal
  };

  users.push(userDetails);
  localStorage.setItem("users", JSON.stringify(users));
  Swal.fire("Account created successfully!");
}

// ---------------------- Login Function ----------------------
function login() {
  const emailVal = document.getElementById("loginEmail").value.trim().toLowerCase();
  const passwordVal = document.getElementById("loginPassword").value.trim();

  if (!emailVal || !passwordVal) {
    Swal.fire("Please enter both email and password.");
    return;
  }

  const users = getData();
  let userFound = users.find(user => user.email === emailVal);

  if (userFound) {
    if (userFound.password === passwordVal) {
      Swal.fire(`Welcome back, ${userFound.name}!`);
      // You can redirect here if needed: window.location.href = "dashboard.html";
    } else {
      Swal.fire("Invalid password.");
    }
  } else {
    Swal.fire("User not found.");
  }
}

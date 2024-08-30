const btn = document.getElementById("btn");
const details = {
  username: "",
  password: "",
  email: "",
};

btn.addEventListener("onclick", (e) => {
  e.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const email = document.getElementById("email").value;
  details["username"] = username;
  details["password"] = password;
  details["email"] = email;
  //   console.log(details);
});

console.log(details, "this is outside");

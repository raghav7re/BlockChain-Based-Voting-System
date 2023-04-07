function checkadmin(form)
{

if(form.userAadhaarNo.value == "XXXX-XXXX" && form.pwd.value == "Pass")
{
  console.log("Right password");
  localStorage.setItem("code", "secret");
  window.location.href = "index.html";
  
}
else
{
  alert("Error Password or Username")
  return false;
}

function logout() {

  var a = localStorage.setItem("code", "logout");
  alert("Successfully logged-out")/*displays error message*/
  window.location.href = "login.html";

}
}
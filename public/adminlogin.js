function checkadmin(form)
{

if(form.userAadhaarNo.value == "XXXX-XXXX" && form.pwd.value == "Pass")
{
  alert("We see you want to vote for legislative India");
  localStorage.setItem("code", "secret");
  window.location.href = "main.html";
  
}
else if(form.userAadhaarNo.value == "ZZZZ" && form.pwd.value == "RAJ")
{
  alert("We see you are from Rajasthan");
  localStorage.setItem("code", "secret");
  window.location.href = "mainRaj.html";
  
}
else if(form.userAadhaarNo.value == "YYYY" && form.pwd.value == "UPUP")
{
  alert("We see you are from UP");
  localStorage.setItem("code", "secret");
  window.location.href = "mainUP.html";
  
}

else
{
  alert("Wrong combination of Password and Username")
  return false;
}


}
var attempt = 4;

function validate(){
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;
if ( username == "lea@gmail.com" && password == "12345"){
alert ("pouet");
window.location = "pouet.html"; 
return false;
}
else{
attempt --;
alert("il vous reste "+attempt+" tentative(s);");
if( attempt == 0){
document.getElementById("username").disabled = true;
document.getElementById("password").disabled = true;
document.getElementById("submit").disabled = true;
return false;
}
}
}
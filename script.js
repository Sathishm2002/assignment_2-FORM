const first = document.querySelector("#first")
const last = document.querySelector("#last")
const fullName = document.querySelector("#fullName")
const city = document.querySelector("#city")
const phone = document.querySelector("#phone")
const email = document.querySelector("#email")
const data = document.querySelector("#data");


const user = {
  first:"",
  last : "",
  fullName:"",
  city:"",
  phone:"",
  email:"",
}

function validateInputs(){
  user.first = first.value.trim()
  user.last = last.value.trim()
  user.fullName = fullName.value.trim()
  user.city = city.value.trim()
  user.phone = phone.value.trim()
  user.email = email.value.trim() 
}
document.getElementById("my-form").addEventListener("submit",function(event){
  event.preventDefault();
  console.log(user); 
  data.innerHTML = JSON.stringify(user);
});



 




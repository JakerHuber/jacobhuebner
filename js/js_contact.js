/* 
   Javascript Program to POST contact info.    
   Programmers: Jacob Huebner
   File Name: js_contact.js
*/

function submitToAPI(e) {
  // disable submit button
  $("#submit").attr("disabled", true);
  e.preventDefault();
  var URL = "https://ibb5tvniha.execute-api.us-east-1.amazonaws.com/phase1/contact-us-resource";

  var Namere = /[A-Za-z]{1}[A-Za-z]/;
  if (!Namere.test($("#name-input").val())) {
    alert ("Name can not less than 2 char");
    $("#submit").attr("disabled", false);
    return;
  }
  
  var mobilere = /[0-9]{10}/;
  if (!mobilere.test($("#phone-input").val())) {
    alert ("Please enter valid mobile number");
    $("#submit").attr("disabled", false);
    return;
  }
  
  if ($("#email-input").val()=="") {
    alert ("Please enter your email id");
    $("#submit").attr("disabled", false);
    return;
  }

  var reeamil = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,6})?$/;
  if (!reeamil.test($("#email-input").val())) {
    alert ("Please enter valid email address");
    $("#submit").attr("disabled", false);
    return;
  }

  var name = $("#name-input").val();
  var phone = $("#phone-input").val();
  var email = $("#email-input").val();
  var desc = $("#description-input").val();
  var data = {
    name : name,
    phone : phone,
    email : email,
    desc : desc
  };


  $.ajax({
    type: "POST",
    url : "https://ibb5tvniha.execute-api.us-east-1.amazonaws.com/phase1/contact-us-resource",
    dataType: "json",
    crossDomain: "true",
    contentType: "application/json; charset=utf-8",
    data: JSON.stringify(data),

         

    success: function () {
      // enable button
      $("#submit").attr("disabled", false);
           
      // clear form and show a success message
      alert("Successfull");
      document.getElementById("contact-form").reset();
      location.reload();
    },
    error: function () {
      // enable button
      $("#submit").attr("disabled", false);
      
      // show an error message
      alert("UnSuccessfull");
    }});
}
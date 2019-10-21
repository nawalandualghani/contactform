
function contactUs()								 
{ 
  let name = document.forms["contactform"]["name"];		
  let phone = document.forms["contactform"]["phone"]; 	 
	let email = document.forms["contactform"]["email"]; 
  let inpObj = document.getElementById("age");
  let massage = document.getElementById("massage");
   

	if (name.value == "")								 
	{ 
    if (!name.checkValidity()) {
      document.getElementById("demo1").innerHTML = name.validationMessage;
    } else {
      document.getElementById("demo1").innerHTML = "It's Correct Value";
    } 
		name.focus(); 
		return false; 
	} 
  if (phone.value == "")								 
	{ 
		if (!phone.checkValidity()) {
      document.getElementById("demo2").innerHTML = phone.validationMessage;
    } else {
      document.getElementById("demo2").innerHTML = "It's Correct Value";
    } 
		phone.focus(); 
		return false; 
    } 
    else{
      phone.value==="/^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/"
    }

	if (email.value == "")							 
	{ 
    // emailFunction(email);
		if (!email.checkValidity()) {
      document.getElementById("demo3").emailFunction(email).innerHTML = email.validationMessage;
    } else {
      document.getElementById("demo3").innerHTML = "It's Correct Value";
    } 
    email.focus();
    emailFunction(email); 
		return false; 
	} 
	
	if (!inpObj.checkValidity()) {
    document.getElementById("demo").innerHTML = inpObj.validationMessage;
  } else {
    document.getElementById("demo").innerHTML = "It's Correct Value";
  } 
  
	
		if (!massage.checkValidity()) {
      document.getElementById("demo4").innerHTML = massage.validationMessage;
    } else {
      document.getElementById("demo4").innerHTML = "It's Correct Value";
    } 
	

	let error = "";
    let stripped = phone.replace(/[\(\)\.\-\ ]/g, '');

   if (stripped == "") {
        error = "You didn't enter a phone number.";
        alert(error)
    } else if (isNaN(parseInt(stripped))) {
        phone = "";
        error = "The phone number contains illegal characters.";
        alert(error)

    } else if (!(stripped.length == 10)) {
        phone = "";
        error = "The phone number is the wrong length. Make sure you included an area code.\n";
        alert(error)
    }
    

    return true; 

}

function emailFunction(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}




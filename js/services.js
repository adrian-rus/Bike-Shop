
function validate() {
	 var first = document.forms["myForm"]["firstname"].value;
	 var second = document.forms["myForm"]["surname"].value;
	 var third = document.getElementById('check');	 
	 var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	 var fifth = document.forms["myForm"]["contact"].value;
	 var sixth = document.forms["myForm"]["bike"].value;
	
	if (first == "") {
		document.forms["myForm"]["firstname"].style.backgroundColor = "red";
		alert("Please enter a first name");
	}
	if (second == "") {
		document.forms["myForm"]["surname"].style.backgroundColor = "red";
		alert("Please enter a surname");
	}
	if (!filter.test(third.value)) {
		alert('Please provide a valid email address');
		email.focus;
		return false;
	}
	if (fifth == "") {
		document.forms["myForm"]["contact"].style.backgroundColor = "red";
		alert("Please enter a contact number");
	}
	else if (isNaN(fifth)){
		document.forms["myForm"]["contact"].style.backgroundColor = "red";
		alert("Please enter a valid contact number");
	}	
	
}

$(document).ready( function() {
    $( "#datepicker" ).datepicker({dateFormat : 'dd-mm-yy'});
  } );


function formValidation(){
	//var cpass = document.myForm.cpsw.value;
	//var psw = document.myForm.psw.value;
	//firstName validate
   	if (document.myForm.fname.value == "") {
		//alert("Please enter firstName");
       	document.getElementById('errorFirstName').innerHTML = "Please Enter firstname";
       	//document.myForm.fname.focus();
		//return false;        
	} 

	//lastName validate
	if (document.myForm.lname.value == "") {
		//alert("Please enter lastname");
        document.getElementById('errorLastName').innerHTML = "Please Enter lastname";
		//document.myForm.lname.focus();
			//return false;
	}

	//email validate
	var email = document.getElementById('txtEmail');
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (!filter.test(email.value)) {
    	//alert('Please provide a valid email address');
    	//email.focus();
    	document.getElementById('errorEmail').innerHTML = "Please provide a valid email address";
    	//return false;
    }			

	//phonenumber validate
	var mobile = document.getElementById('phoneNumber');
	var phoneNum  = /^(\+91[\-\s]?)?[0]?(91)?[789]\d{9}$/;
	if (!mobile.value.match(phoneNum)) {
		document.getElementById('errorPhoneNumber').innerHTML = "Please enter valid Phone number";
		//mobile.focus();
		//return false;
	}	

    //job designation validate
   	if (document.myForm.jobRole.value=="0") {
    	//alert("Please choose job designation");
       	document.getElementById('errorJobRole').innerHTML = "Please Choose Job designation";
    	//return false;
    }
      
    //choosing technology
    if (document.myForm.technology.value == "") {
    	//alert("Please select tech Place.!");
       	document.getElementById('errorTechnology').innerHTML = "Please technology from list";
       	//return false;
    }

    //password validation
    var p = document.getElementById('password').value,
    errors = [];     	
    if (p.length < 6) {
    	errors.push("Your password required maximum 6 digits !");
    } if (p.search(/[A-Z]/i) < 0) {
    	errors.push("and use one upper case");
    } if (p.search(/[~!,*@]/i) < 0) {
        errors.push(" use special characters ~!,*");
    } if (p.search(/[0-9]/) < 0) {
        errors.push(" and use one digit "); 
    } if (errors.length > 0) {
    	document.getElementById('errorPassword').innerHTML = errors.join("\n");
    	return false;
    }

	//confirm password validation 
	if (document.myForm.psw.value != document.myForm.cpsw.value) {
		document.getElementById('errorConfirmPassword').innerHTML = "Password not matching";
	} else{
		alert("Registered successfully !!");
	}
	return false;        
}

//keypress fuction for individual fields
function firstNameFunction() {
	document.getElementById('errorFirstName').innerHTML="";
}
function lastNameFunction(){
	document.getElementById('errorLastName').innerHTML="";			
}
function genderFunction(){
	alert("done !!");
	//document.getElementById('errorGender').innerHTML="";
}
function emailFunction(){
	document.getElementById('errorEmail').innerHTML="";
}
function phoneFunction(){
	document.getElementById('errorPhoneNumber').innerHTML="";
}
function jobRoleFunction(){
	document.getElementById('errorJobRole').innerHTML="";
}
function techFunction(){
	document.getElementById('errorTechnology').innerHTML="";
}
function pswFunction(){
	document.getElementById('errorPassword').innerHTML="";
}
function cpswFunction(){
	document.getElementById('errorConfirmPassword').innerHTML="";
}

//Reset function
function reloadFunction() {
	location.reload();
}

//onkeyup function
function firstNameKeyUp(){
	if (document.myForm.fname.value == "") {
		document.getElementById('errorFirstName').innerHTML = "Please Enter firstname";
	}
}	

function lastNameKeyUp(){
	if (document.myForm.lname.value == "") {
		document.getElementById('errorLastName').innerHTML = "Please Enter lastname";
	}
}	

function emailKeyUp(){
	var email = document.getElementById('txtEmail');
	var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	if (!filter.test(email.value)) {
		//alert('Please provide a valid email address');
		//email.focus();
		document.getElementById('errorEmail').innerHTML = "Please provide a valid email address";
		//return false;
	}	
}

function phoneKeyUp(){
	var mobile = document.getElementById('phoneNumber');
	var phoneNum  = /^(\+91[\-\s]?)?[0]?(91)?[789]\d{9}$/;
	if (!mobile.value.match(phoneNum)) {
		document.getElementById('errorPhoneNumber').innerHTML = "Please enter valid Phone number";
		//mobile.focus();
		//return false;
	}
}

function passwordKeyUp(){
	var p = document.getElementById('password').value,
	errors = [];     	
	if (p.length < 6) {
		errors.push("Your password required maximum 6 digits !");
	} if (p.search(/[A-Z]/i) < 0) {
       	errors.push("and use one upper case");
	} if (p.search(/[~!,*@]/i) < 0) {
       	errors.push(" use special characters ~!,*");
   	} if (p.search(/[0-9]/) < 0) {
       	errors.push(" and use one digit "); 
   	} if (errors.length > 0) {
   		document.getElementById('errorPassword').innerHTML = errors.join("\n");
   		return false;
   	}
}
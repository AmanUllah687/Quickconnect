var regName = /^[A-Za-z\s]+$/;
function checkName() {
  var name = document.getElementById('name').value;  
    if (name==null || name=="" || !regName.test(name)){  
      document.getElementById("username").innerHTML="Name can't be blank & It sould be in correct Format";  
      return false;  
    }
    else {
     document.getElementById("username").innerHTML = "";
     }
}
function checkPassword() {
  var password=document.myform.password.value;
  if(password.length<6){  
   document.getElementById("userpassword").innerHTML="Password must be at least 6 characters long.";  
   return false;  
   }
   else {
  document.getElementById("userpassword").innerHTML = "";
  }
}
function checkEmail() {
  var email = document.getElementById("text").value;
     var regx = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
     if(!regx.test(email)){
         document.getElementById("useremail").innerHTML="Sorry, incorrect E-mail ID";
        return false;
     }
     else {
 document.getElementById("useremail").innerHTML = "";
 }
}
function checkNumber() {
  var num = document.myform.num.value;  
 if (isNaN(num) || num==""){  
   document.getElementById("numloc").innerHTML="Enter Numeric value only";  
   return false;  
 }
 else {
  document.getElementById("numloc").innerHTML = "";
  }
  
}
function checkDegree() {
  if( document.myform.degree.value == "YES" )
     {
       document.getElementById("yourdegree").innerHTML="Please Select your Degree";
       return false;
     }
     else {
     document.getElementById("yourdegree").innerHTML = "";
     }
}
function checkEngeeneering() {
  if( document.myform.Engeeneering.value == "Yes" )
     {
       document.getElementById("yourfield").innerHTML="Please Select your Field";
       return false;
     }
     else {
     document.getElementById("yourfield").innerHTML = "";
     }
     }
     function checkGender() {
      var option=document.getElementsByName('gender');
      if (!(option[0].checked || option[1].checked)) {
          document.getElementById("yourgender").innerHTML="Please Select Your Gender";
          return false;
          }
      else {
       document.getElementById("yourgender").innerHTML = "";
       }
    }
    function checkHobby(){
      var checkbox1 = document.getElementById("hobby");
      var checkbox2 = document.getElementById("hobby1");
       if (!checkbox1.checked && !checkbox2.checked){
        document.getElementById("yourhobby").innerHTML="Please select a hobby";
        return false;
       }
       else {
       document.getElementById("yourhobby").innerHTML = "";
       }
    }
    function checkTextarea(){
      const textarea = document.getElementById("mytextarea");
      const value = textarea.value;
      if (value == "") {
    document.getElementById("youraddress").innerHTML="Textarea cannot be empty";
    return false;
    }
    else if (value.length < 10) {
    document.getElementById("youraddress").innerHTML="Textarea must contain at least 10 characters";
    return false;
    }
else {
document.getElementById("youraddress").innerHTML = "";
    }
    }
    function checkFile(){
    var selectedFile = document.getElementById('fileInput').files[0];
    const file = fileInput.files[0];
             var allowedTypes = ['application/pdf'];
    if (!file) {
       document.getElementById("yourresume").innerHTML="Please select a file.";
       return false;
      }
             if (!allowedTypes.includes(selectedFile.type)) {
                document.getElementById("yourresume").innerHTML="Invalid file type. Please upload a PDF file.";
                return false;  
             }
             else {
     document.getElementById("yourresume").innerHTML = "";
     } 
    }
function validateform(){
    var regName = /^[A-Za-z\s]+$/;
    var name = document.getElementById('name').value;  
    if (name==null || name=="" || !regName.test(name)){  
      document.getElementById("username").innerHTML="Name can't be blank & It sould be in correct Format";  
      return false;  
    }
    else {
     document.getElementById("username").innerHTML = "";
     }
    var name=document.myform.name.value;
    var password=document.myform.password.value;
     if(password.length<6){  
      document.getElementById("userpassword").innerHTML="Password must be at least 6 characters long.";  
      return false;  
      }
      else {
     document.getElementById("userpassword").innerHTML = "";
     }
         var email = document.getElementById("text").value;
         var regx = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
         if(!regx.test(email)){
             document.getElementById("useremail").innerHTML="Sorry, incorrect E-mail ID";
            return false;
         }
         else {
     document.getElementById("useremail").innerHTML = "";
     }
       var num = document.myform.num.value;  
    if (isNaN(num) || num==""){  
      document.getElementById("numloc").innerHTML="Enter Numeric value only";  
      return false;  
    }
    else {
     document.getElementById("numloc").innerHTML = "";
     }
    if( document.myform.degree.value == "YES" )
     {
       document.getElementById("yourdegree").innerHTML="Please Select your Degree";
       return false;
     }
     else {
     document.getElementById("yourdegree").innerHTML = "";
     }
     if( document.myform.Engeeneering.value == "Yes" )
     {
       document.getElementById("yourfield").innerHTML="Please Select your Field";
       return false;
     }
     else {
     document.getElementById("yourfield").innerHTML = "";
     }
       var option=document.getElementsByName('gender');
    if (!(option[0].checked || option[1].checked)) {
        document.getElementById("yourgender").innerHTML="Please Select Your Gender";
        return false;
        }
    else {
     document.getElementById("yourgender").innerHTML = "";
     }
     var checkbox1 = document.getElementById("hobby");
    var checkbox2 = document.getElementById("hobby1");
     if (!checkbox1.checked && !checkbox2.checked){
      document.getElementById("yourhobby").innerHTML="Please select a hobby";
      return false;
     }
     else {
     document.getElementById("yourhobby").innerHTML = "";
     }
     const textarea = document.getElementById("mytextarea");
      const value = textarea.value;
      if (value == "") {
    document.getElementById("youraddress").innerHTML="Textarea cannot be empty";
    return false;
    }
    else if (value.length < 10) {
    document.getElementById("youraddress").innerHTML="Textarea must contain at least 10 characters";
    return false;
    }
else {
document.getElementById("youraddress").innerHTML = "";
    }
    var selectedFile = document.getElementById('fileInput').files[0];
    const file = fileInput.files[0];
             var allowedTypes = ['application/pdf'];
    if (!file) {
       document.getElementById("yourresume").innerHTML="Please select a file.";
       return false;
      }
             if (!allowedTypes.includes(selectedFile.type)) {
                document.getElementById("yourresume").innerHTML="Invalid file type. Please upload a PDF file.";
                return false;  
             }
             else {
     document.getElementById("yourresume").innerHTML = "";
     }      
    }
    

  
let errorCount=0;

function validateForm() {
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let error = document.getElementById("error");


  if (email == "" || password == "") {
    errorCount++;
    error.innerText = "You need to fioll all the field";
    console.log("Submission Errors:", errorCount);

      return false;
  }

  let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.match(emailPattern)) {
    errorCount++;
        error.innerText = "Enter a valid email address!";
        console.log("Submission Errors:", errorCount);

        return false;
      }

    if (password.length < 6) {
        errorCount++;
    error.innerText = "Password should 6 char long";
    console.log("Submission Errors:", errorCount);

    return false;
  }

  if( !password.includes("#")){
    errorCount++;
     error.innerText = "passhor shold have a #";
     console.log("Submission Errors:", errorCount);

      return false;
  }
  console.assert(errorCount)

 error.innerText = "";
  alert("Login Successful ");
  return true;

}


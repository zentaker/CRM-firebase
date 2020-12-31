
firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      // User is signed in.
        document.getElementById("user_div").style.display = "block";
        document.getElementById("login_div").style.display = "none";
    } else {
      // No user is signed in.
      document.getElementById("user_div").style.display = "none";
      document.getElementById("login_div").style.display = "block";
    }
  });

function login() {

    
    var userEmail = document.getElementById('email');
    var userPassword = document.getElementById('password');

    console.log(userEmail);

    firebase.auth().signInWithEmailAndPassword(userEmail, userPassword)

  .catch((error) => {
    var errorCode = error.code;
      var errorMessage = error.message;
      window.alert("Error: " + errorMessage);
  });




    
}
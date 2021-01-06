

var firebaseConfig = {
  apiKey: "AIzaSyCxPbWhnISHclW_InK50hPbA2-EtM4PI2c",
  authDomain: "crm-prueva.firebaseapp.com",
  projectId: "crm-prueva",
  storageBucket: "crm-prueva.appspot.com",
  messagingSenderId: "830432938783",
  appId: "1:830432938783:web:4e34904063ba3bce5cbe2a"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);







firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    console.log(user);
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

    
    var userEmail = document.getElementById('email').value;
    var userPassword = document.getElementById('password').value;

    console.log(userEmail);

    firebase.auth().signInWithEmailAndPassword(userEmail, userPassword)

  .catch((error) => {
    var errorCode = error.code;
      var errorMessage = error.message;
      window.alert("Error: " + errorMessage);
  });




    
}

function logout() {
  firebase.auth().signOut();
}


// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDnLsZW1uEtJZvkgLEZ6Z3qzodAtA8TRrI",
    authDomain: "project-94-213da.firebaseapp.com",
    projectId: "project-94-213da",
    storageBucket: "project-94-213da.appspot.com",
    messagingSenderId: "339163776113",
    appId: "1:339163776113:web:3c724588f5fb88a10707d0"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "Welcome " + user_name;

  function addRoom() {
    user_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
}

function addRoom() { 
  room_name = document.getElementById("room_name").value; 
  firebase.database().ref("/").child(room_name).update({ 
        purpose : "adding room name" 
    }); 
    localStorage.setItem("room_name", room_name); 
    window.location = "kwitter_page.html"; 
}
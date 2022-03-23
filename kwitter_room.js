const firebaseConfig = {
  apiKey: "AIzaSyByIT9ZiaUPvmPteVookQwAHfjtZAIXTjE",
  authDomain: "lets-chat-web-app-73efc.firebaseapp.com",
  databaseURL: "https://lets-chat-web-app-73efc-default-rtdb.firebaseio.com",
  projectId: "lets-chat-web-app-73efc",
  storageBucket: "lets-chat-web-app-73efc.appspot.com",
  messagingSenderId: "409330371196",
  appId: "1:409330371196:web:d9cc72907ae816108e97f9",
  measurementId: "G-GSKF7SJG6R"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


samar_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + samar_name + " !";
function getData() {
  {firebase.database().ref("/").on('value',
  function(snapshot) {document.getElementById("output").innerHTML =
  "";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
  Room_names = childKey; 
  A1 = "<div></div>"
room_name = document.getElementById("Room_name").value;
  firebase.database().ref("/").child(room_name).update({
        Purpose: "add room"
  });
  localStorage.setItem("Room_name", room_name);
  window.location = "kwitter_page.html";
});});}
}
getData();
function Add_room() {
  room_name = document.getElementById("Room_name").value;
  firebase.database().ref("/").child(room_name).update({
        Purpose: "add room"
  });
  localStorage.setItem("Room_name", room_name);
  window.location = "kwitter_page.html";
}

function redirectToRoomName(){
  localStorage.setItem("samar", room_name);
  window.location = "kwitter_page.html";
}


user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";
function addRoom()
{
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding room name"
      });
      localStorage.setItem("room_name",room_name);
      window.location="chat_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   console.log("Room Name-"+Room_names);
   row="<div class='room_name'id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
   document.getElementById("output").innerHTML+=row;
   });});}
getData();
function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="chat_page.html";
}
var firebaseConfig = {
    apiKey: "AIzaSyAgBW3rvGCuzY7GmQkbh-pu_XWLo9rBfMc",
    authDomain: "project-101-dfc79.firebaseapp.com",
    databaseURL: "https://project-101-dfc79-default-rtdb.firebaseio.com",
    projectId: "project-101-dfc79",
    storageBucket: "project-101-dfc79.appspot.com",
    messagingSenderId: "464428362553",
    appId: "1:464428362553:web:f8b40ae740955c306ed6e8"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
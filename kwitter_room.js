// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app" ;
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBMzYCcCRmd6JSKtI512TXJrvEz40zrug0",
  authDomain: "lets-chat-3f706.firebaseapp.com",
  projectId: "lets-chat-3f706",
  storageBucket: "lets-chat-3f706.appspot.com",
  messagingSenderId: "42243021300",
  appId: "1:42243021300:web:357c0a83aa4783d04601a1",
  measurementId: "G-MXCGKRYKGL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

document.getElementById("inp_name").innerHTML = user_name;

function addRoom()
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose :"adding room name"
      });

      localStorage.setItem("room_name", room_name)

      window.location = "kwitter_page.html"

}
addRoom();

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      
       console.log("Room Name - "+ room_names);
       row = "<div class ='room_name' id="+room_names+"' onclick='redirectToRoomName(this.id)'>#" + Room_names + "</div><hr>";
       document.getElementById("output").innerHTML += row;
      });});}
getData();

function redirectToRoomName(name){
      console.log(name);
      firebase.setItem("room_name", name);
      window.location("kwitter_page.html");
}
redirectToRoomName();
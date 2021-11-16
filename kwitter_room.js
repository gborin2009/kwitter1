var firebaseConfig = {
      apiKey: "AIzaSyBx16bERPgjl_AQ5fchI-RZlMRgn8h0qoQ",
      authDomain: "kwitter-446d6.firebaseapp.com",
      databaseURL: "https://kwitter-446d6-default-rtdb.firebaseio.com",
      projectId: "kwitter-446d6",
      storageBucket: "kwitter-446d6.appspot.com",
      messagingSenderId: "214146823166",
      appId: "1:214146823166:web:bbccaeb32f8f667fc286af"
    };
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();

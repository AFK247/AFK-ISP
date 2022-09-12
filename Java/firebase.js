const firebaseConfig = {
    apiKey: "AIzaSyAw0vnb-yrOBv9PsIBnCoKZ7000Qr6ah-Q",
    authDomain: "isp-user-data.firebaseapp.com",
    databaseURL: "https://isp-user-data-default-rtdb.firebaseio.com",
    projectId: "isp-user-data",
    storageBucket: "isp-user-data.appspot.com",
    messagingSenderId: "407815766721",
    appId: "1:407815766721:web:c79ce3c4bfc8a423d1ca40"
  };

  //initialize firebase
  const app = initializeApp(firebaseConfig);
// firebase.initializeApp(firebaseConfig);
  
//referance the database
let contactFormDB=firebase.database().ref("contactForm");

document.getElementById("contactForm").addEventListener("submit",submitForm);

const getElementVal = (id)=>{
    return document.getElementById(id).value;
}

function submitForm(e){
    e.preventDefault();

    let name=getElementVal("name");
    // let email=getElementVal("email");
    let phone=getElementVal("phone");
    // let address=getElementVal("address");

    console.log(e.target);
    
}
console.log("asffsaff");



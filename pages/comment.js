const firebaseConfig = {
  apiKey: "AIzaSyAuKHF-dytw0zmB_QjgtgoV8KLwz3bEcMk",
  authDomain: "oscar-5497d.firebaseapp.com",
  databaseURL: "https://oscar-5497d-default-rtdb.firebaseio.com",
  projectId: "oscar-5497d",
  storageBucket: "oscar-5497d.appspot.com",
  messagingSenderId: "191732630216",
  appId: "1:191732630216:web:7d9d2d34a8c88a26c55bfd"
};

// initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var contactFormDB = firebase.database().ref("contactForm");

document.getElementById("commentForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal("name");
  var emailid = getElementVal("emailid");
  var msgContent = getElementVal("msgContent");

  saveMessages(name, emailid, msgContent);

  //   enable alert
  document.querySelector(".alert").style.display = "block";

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  //   reset the form
  document.getElementById("commentForm").reset();
}

const saveMessages = (name, emailid, msgContent) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    name: name,
    emailid: emailid,
    msgContent: msgContent,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};
const firebaseConfig = {
    apiKey: "AIzaSyBrvn7PSZ-UGtrhriyIuIGMoqmCQzWLBUI",
    authDomain: "project-1-adc63.firebaseapp.com",
    databaseURL: "https://project-1-adc63.firebaseio.com",
    projectId: "project-1-adc63",
    storageBucket: "project-1-adc63.appspot.com",
    messagingSenderId: "131177922627",
    appId: "1:131177922627:web:9ff52ca0eb858f27"
  };
  firebase.initializeApp(firebaseConfig);



firebase.auth().createUserWithEmailAndPassword('ali@gmail.com', '123456').then.catch(res=>{
  console.log(res)})
 

  firebase.auth().signInWithEmailAndPassword('ali@gmail.com', '123456').then(res=>{
    console.log(res).catch(function(error){
      console.log(error)
    })
  })
 



 
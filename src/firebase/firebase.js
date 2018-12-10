import * as firebase from 'firebase';

// Initialize Firebase
const config = {
    apiKey: "AIzaSyCYpwOagySPcmB3ZzkDt7vcNSCohOF6MBg",
    authDomain: "expensify-cbbe6.firebaseapp.com",
    databaseURL: "https://expensify-cbbe6.firebaseio.com",
    projectId: "expensify-cbbe6",
    storageBucket: "expensify-cbbe6.appspot.com",
    messagingSenderId: "768918544317"
  };
firebase.initializeApp(config);

const database = firebase.database();

database.ref().set({
      name: 'David Pádua',
      age: 45,
      stressLevel: 6,
      job: {
          title: 'Front end developer',
          company: 'DLC'
      },
      location: {
          city: 'Cabo Ruivo',
          country: 'Portugal'
      }
  }).then(() => {
      console.log('Data is saved!')
  }).catch((e) => {
    console.log('This failed.', e);
  });

//:::: REMOVE DATA
// database.ref()
//   .remove()
//   .then(function() {
//     console.log("Remove succeeded.")
//   })
//   .catch(function(error) {
//     console.log("Remove failed: " + error.message)
//   });

//:::: UPDATE DATA
database.ref().update({
    stressLevel: 9,
    'job/company': 'Talkdesk',
    'location/city': 'Saldanha'
})

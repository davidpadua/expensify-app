import * as firebase from 'firebase';


// Initialize Firebase
const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
  };
  
firebase.initializeApp(config);

const database = firebase.database();

export {firebase, database as default };

// // child_removed
// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val())
// })

// // child_changed
// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val())
// })

// // child_added
// database.ref('expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val())
// })

/* database.ref('expenses')
        .once('value')
        .then((snapshot) => {
            const expenses = [];

            snapshot.forEach((childSnapshot) => {
                expenses.push({
                   id: childSnapshot.key,
                   ...childSnapshot.val() 
                });
            });

            console.log(expenses);
        }); */
/* database.ref('expenses').on('value', (snapshot) => {
        const expenses = [];
        snapshot.forEach((childSnapshot) => {
            expenses.push({
                id: childSnapshot.key,
                ...childSnapshot.val() 
            });
        });

        console.log(expenses);
}) */
// database.ref('expenses').push({
//       description: 'Relógio sternglas',
//       amount: 18900,
//       createdAt: 978562695211,
//       note: ''
// })


// database.ref('notes/-LTX6hvVcFjOqGAWDkom').update({
//     body: 'Buy food'
// })
//database.ref('notes/-LTX6hvVcFjOqGAWDkom').remove();

// database.ref('notes').push({
//     title: 'Course Topics',
//     body: 'React Native, Angular, Python'
// })
// const firebaseNotes = {
//     notes: {
//         fasdfsdg: {
//             title: 'First note!',
//             body: 'This is my note' 
//         },
//         dfgsdfhdh: {
//             title: 'Another note',
//             body: 'This is my note' 
//         }
//     }
// }
// const notes = [
//     {
//         id: '12',
//         title: 'First note!',
//         body: 'This is my note'
//     },
//     {
//         id: '761ase',
//         title: 'Another note',
//         body: 'This is my note'
//     }
// ]
// database.ref('notes').set(notes);
//CRUD >> Creat, Read, Update, Delete

// database.ref().on('value', (snapshot) => {
//     const val = snapshot.val();
//     console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`)
// })
// const onValueChange = database.ref().on('value', (snapshot) => {
//     console.log(snapshot.val());
// }, (e) => {
//     console.log('Error with data fetching', e);
// });

// setTimeout(() => {
//     database.ref('age').set(29);
// }, 3500)

// setTimeout(() => {
//     database.ref().off(onValueChange);
// }, 7000)

// setTimeout(() => {
//     database.ref('age').set(30);
// }, 10500)
// database.ref('location/city')
//         .once('value')
//         .then((snapshot) => {
//             const val = snapshot.val();
//             console.log(val);
//         })
//         .catch(() => {
//            console.log('Error fetching data', e);
//         })

// database.ref().set({
//       name: 'David Pádua',
//       age: 45,
//       stressLevel: 6,
//       job: {
//           title: 'Front end developer',
//           company: 'DLC'
//       },
//       location: {
//           city: 'Cabo Ruivo',
//           country: 'Portugal'
//       }
//   }).then(() => {
//       console.log('Data is saved!')
//   }).catch((e) => {
//     console.log('This failed.', e);
//   });

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
// database.ref().update({
//     stressLevel: 9,
//     'job/company': 'Talkdesk',
//     'location/city': 'Saldanha'
// });

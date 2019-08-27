const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();
const env = functions.config();

import * as Airtable from 'airtable';

const base = new Airtable({apiKey: env.airtable.key }).base('TikRecords');


// exports.addToAirtable = functions.firestore
//   .document('customers/{customerId}')
//   .onCreate((snap, context) => {
//     const data = snap.data();

//     // Add the data to the Airtable Base
//     return base('TikRecords').create(data);
// });

// exports.addToAirtable = functions.database.ref('/reg')
//     .onCreate(
//         (snap, context)=>{
//         const data = snap.val();
//         return base ('TikRecords').create(data);
//     }
//     );

// var functions = require('firebase-functions');

// exports.helloWorld = functions.database.ref('/reg')
// 	.onWrite(event => {
// 		console.log('New data: ', event.data.val());
// 	});

    // exports.helloDocument = functions.database.ref('/reg')
    // .onCreate(
    //     (snap,context) => {
    //         console.log('new data found');
    //     }
    // )

// // .onCreate((snap, context) => {
// //         const data = snap.data();
    
// //         // Add the data to the Airtable Base
// //         return base('Tik Records').create(data)
// //     });


// exports.helloError = functions.https.onRequest((request, response) => {
//     console.log('I am a log entry!');
//     response.send('Hello World...');
//   });
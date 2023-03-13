import * as firebase from "firebase/app";
import { collection, doc, getFirestore, serverTimestamp, writeBatch } from "firebase/firestore";
import { ICustomer } from "./entities/customer";
import { IOrder } from "./entities/order";

const firebaseConfig = {
    apiKey: "AIzaSyDvPfM9KICrVgykryS_ZUNaCD8u-VzpJto",
    authDomain: "girehcaju.firebaseapp.com",
    projectId: "girehcaju",
    storageBucket: "girehcaju.appspot.com",
    messagingSenderId: "820739010903",
    appId: "1:820739010903:web:d6321c76facc5e377c0e12"
};


const app = firebase.initializeApp(firebaseConfig);


export const database = getFirestore(app)

// const mockedData: IOrder[] = [];
// // Generate 20 mocked data
// for (let i = 0; i < 20; i++) {
//     const order: IOrder = {
//         lenses: { name: `Lens ${i}`, value: i },
//         frame: { name: `Frame ${i}`, value: i },
//         measurements: {
//             rightEye: { dnp: i, height: i },
//             leftEye: { dnp: i, height: i }
//         },
//         appointmentDetails: {
//             rightEye: { esf: i, cil: i, axle: i, add: i },
//             leftEye: { esf: i, cil: i, axle: i, add: i }
//         },
//         paymentAndTotalInformation: {
//             total: i * 100,
//             disccount: i,
//             remains: i,
//             received: i,
//             paid: i % 2 === 0
//         },
//         payments: [
//             { amount: i * 50, type: 'creditCard' },
//             { amount: i * 50, type: 'pix' }
//         ],
//         customerReference: {
//             storeRef: `Store ${i}`,
//             customerRef: `Customer ${i}`,
//             customerName: `Customer ${i}`
//         },
//         serviceOrder: i + 1000,
//         feedback: i % 3 === 0,
//         delivered: i % 4 === 0,
//         observation: `Observation ${i}`,
//         createdAt:  new Date().getMilliseconds(),
//     };

//     mockedData.push(order);
// }


// const mockedData: ICustomer[] = [
//     {
//         name: 'John Doe',
//         createdAt: new Date().getTime(),
//         address: '123 Main St, Anytown USA',
//         inLine: true,
//         age: 32,
//         phone: '555-1234'
//     },
//     {
//         name: 'Jane Smith',
//         createdAt: new Date().getTime(),
//         address: '456 Oak Ave, Anytown USA',
//         inLine: false,
//         age: 27,
//         phone: '555-5678'
//     },
//     {
//         name: 'Bob Johnson',
//         createdAt: new Date().getTime(),
//         address: '789 Elm St, Anytown USA',
//         inLine: true,
//         age: 42,
//         phone: '555-9012'
//     },
//     {
//         name: 'Alice Brown',
//         createdAt: new Date().getTime(),
//         address: '321 Maple Ave, Anytown USA',
//         inLine: false,
//         age: 19,
//         phone: '555-3456'
//     },
//     {
//         name: 'Tom Wilson',
//         createdAt: new Date().getTime(),
//         address: '654 Pine St, Anytown USA',
//         inLine: true,
//         age: 56,
//         phone: '555-7890'
//     },
//     {
//         name: 'Samantha Lee',
//         createdAt: new Date().getTime(),
//         address: '987 Cedar Ave, Anytown USA',
//         inLine: false,
//         age: 24,
//         phone: '555-2345'
//     },
//     {
//         name: 'David Chen',
//         createdAt: new Date().getTime(),
//         address: '159 Oak St, Anytown USA',
//         inLine: true,
//         age: 38,
//         phone: '555-6789'
//     },
//     {
//         name: 'Karen Taylor',
//         createdAt: new Date().getTime(),
//         address: '753 Maple St, Anytown USA',
//         inLine: false,
//         age: 31,
//         phone: '555-0123'
//     },
//     {
//         name: 'Mike Jones',
//         createdAt: new Date().getTime(),
//         address: '246 Elm St, Anytown USA',
//         inLine: true,
//         age: 45,
//         phone: '555-4567'
//     },
//     {
//         name: 'Jennifer Lee',
//         createdAt: new Date().getTime(),
//         address: '864 Pine Ave, Anytown USA',
//         inLine: false,
//         age: 29,
//         phone: '555-8901'
//     },
//     {
//         name: 'James Kim',
//         createdAt: new Date().getTime(),
//         address: '369 Cedar St, Anytown USA',
//         inLine: true,
//         age: 52,
//         phone: '555-2345'
//     },
//     {
//         name: 'Lisa Brown',
//         createdAt: new Date().getTime(),
//         address: '975 Oak Ave, Anytown USA',
//         inLine: false,
//         age: 22,
//         phone: '555-6789'
//     },
//     {
//         name: 'Kevin Davis',
//         createdAt: new Date().getTime(),
//         address: '582 Maple St, Anytown USA',
//         inLine: true,
//         age: 41,
//         phone: '555-0123'
//     },
//     {
//         name: 'Maggie Young',
//         createdAt: new Date().getTime(),
//         address: '824 Pine St, Anytown USA',
//         inLine: false,
//         age: 26,
//         phone: '555-4567'
//     },
//     {
//         name: 'Mark Taylor',
//         createdAt: new Date().getTime(),
//         address: '135 Cedar Ave, Anytown USA',
//         inLine: true,
//         age: 26,
//         phone: '555-4567'
//     }
// ]


// // Insert the mocked data to the Firestore database
// const batch = writeBatch(database);
// mockedData.forEach((order) => {
//     const orderRef = doc(collection(database, 'customers'));
//     batch.set(orderRef, order);
// });

// batch.commit().then(() => {
//     console.log('Mocked data has been inserted successfully!');
// }).catch((error) => {
//     console.error(error);
// });

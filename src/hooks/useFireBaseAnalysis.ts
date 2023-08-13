import firebase from 'firebase/app';
import 'firebase/analytics';
import 'firebase/auth';
import 'firebase/firestore'; // If you plan to use Firestore
// Import other Firebase modules as needed
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics, logEvent } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const useFireBaseAnalysis =()=>{
  const firebaseConfig = {
    apiKey: "AIzaSyAlqlIJy_psLxACxmRf5nYU0CLA7oj96mI",
    authDomain: "hospitality-digitization.firebaseapp.com",
    projectId: "hospitality-digitization",
    storageBucket: "hospitality-digitization.appspot.com",
    messagingSenderId: "1078672455768",
    appId: "1:1078672455768:web:b8dfbdb530e0cb3f42722d",
    measurementId: "G-YBR7CRY471"
  };
   
    const app = initializeApp(firebaseConfig);
    // const analytics = getAnalytics(app);
    console.log("app")
    return { app }; 
}

export default useFireBaseAnalysis;

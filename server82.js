// Import Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
    getFirestore,
    collection,
    addDoc,
    getDocs
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// Firebase Configuration
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT.firebaseapp.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT.appspot.com",
    messagingSenderId: "YOUR_SENDER_ID",
    appId: "YOUR_APP_ID"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Add User Data
async function addUser(name) {

    try {

        const docRef = await addDoc(
            collection(db, "users"),
            {
                name: name,
                createdAt: new Date()
            }
        );

        console.log(
            "Document ID:",
            docRef.id
        );

    } catch (error) {

        console.error(
            "Error adding document:",
            error
        );
    }
}

// Get User Data
async function getUsers() {

    try {

        const querySnapshot =
            await getDocs(
                collection(db, "users")
            );

        querySnapshot.forEach((doc) => {

            console.log(
                doc.id,
                doc.data()
            );
        });

    } catch (error) {

        console.error(
            "Error fetching users:",
            error
        );
    }
}

// Example Usage
addUser("Janushiya");
getUsers();



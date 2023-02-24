import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'

import './assets/main.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";

const firebaseConfig = {
  apiKey: "AIzaSyBV1U29UQOyXuSbNvFfHrZXQk8cAsF3GEg",
  authDomain: "mon-portfolio-d8659.firebaseapp.com",
  projectId: "mon-portfolio-d8659",
  storageBucket: "mon-portfolio-d8659.appspot.com",
  messagingSenderId: "253910080120",
  appId: "1:253910080120:web:1b2da5bc8fc61b26b92b8d"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);

const app = createApp(App)

app.use(router)

app.mount('#app')

import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

function StartFirebase() {
  const firebaseConfig = {
    apiKey: "AIzaSyDahAZLP3Fe68j9C-7ZT9i0nAqiQWXhs_4",
    authDomain: "http://tracknerd-staging.firebaseapp.com/",
    databaseURL: "https://tracknerd-staging-default-rtdb.firebaseio.com/",
    storageBucket: "tracknerd-staging.appspot.com",
    appId: "1:847967007196:web:ae4df284f5560af4139f19",
  };
  const app = initializeApp(firebaseConfig);
  return getDatabase(app);
}

export default StartFirebase;

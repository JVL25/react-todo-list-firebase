import './App.css';
import {firebaseConfig} from "./firebase-config";
import { FirebaseDatabaseProvider } from '@react-firebase/database';
import firebase from "firebase/compat/app"; // this one to use other is bug

function App() {
  return (
    <FirebaseDatabaseProvider {...firebaseConfig} firebase={firebase}>
      <div className="App">
          <h1>Lol</h1>
      </div>
    </FirebaseDatabaseProvider>
  );
}

export default App;

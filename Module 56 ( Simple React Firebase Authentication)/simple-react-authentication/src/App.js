import "./App.css";
import app from "./firebase.init";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useState } from "react";

const auth = getAuth(app);
function App() {
  const [user, setUser] = useState({});
  const googleProvider = new GoogleAuthProvider();

  const handleGoogleSingIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        setUser(user);
      })
      .catch((error) => {
        console.log("Error is", error);
      });
  };

  const handleGoogleSingOut = () => {
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch((error) => {
        setUser({});
      });
  };

  return (
    <div className="App">
      {user.uid ? (
        <button onClick={handleGoogleSingOut}>Sign out</button>
      ) : (
        <>
          <button onClick={handleGoogleSingIn}>Google sign in</button>
        </>
      )}
      <div>
        <h2>Name: {user.displayName}</h2>
        <p>Email: {user.email}</p>
        <img
          style={{ borderRadius: "50px" }}
          src={user.photoURL}
          alt="userPhoto"
        />
      </div>
    </div>
  );
}

export default App;

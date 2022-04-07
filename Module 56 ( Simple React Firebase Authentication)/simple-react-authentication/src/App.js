import "./App.css";
import app from "./firebase.init";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
function App() {
  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();

  const handleGoogleSingIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.log("Error is", error);
      });
  };
  return (
    <div className="App">
      <button onClick={handleGoogleSingIn}>Google sign in</button>
    </div>
  );
}

export default App;

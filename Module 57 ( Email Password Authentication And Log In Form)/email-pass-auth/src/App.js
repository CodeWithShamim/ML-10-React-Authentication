import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import LoginForm from "./components/LoginForm/LoginForm";
// import { getAuth } from "/firebase/auth";
// import app from "./firebase.init";

// const auth = getAuth(app);
function App() {
  return (
    <div className="App">
      <LoginForm></LoginForm>
    </div>
  );
}

export default App;

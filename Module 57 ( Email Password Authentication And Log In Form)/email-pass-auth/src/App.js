import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import { getAuth } from "/firebase/auth";
// import app from "./firebase.init";

// const auth = getAuth(app);
function App() {
  const handleEmailBlur = (event) => {
    console.log(event.target.value);
  };

  const handlePasswordBlur = (event) => {
    console.log(event.target.value);
  };

  const handleFormSubmit = (e) => {
    console.log("Form submitted!!");
    e.preventDefault();
  };

  return (
    <div className="App">
      <form onSubmit={handleFormSubmit}>
        <input
          onBlur={handleEmailBlur}
          type="email"
          name=""
          id=""
          placeholder="email here"
        />
        <br />
        <input
          onBlur={handlePasswordBlur}
          type="password"
          name=""
          id=""
          placeholder="password here"
        />
        <br />
        <input type="submit" value="Login" />
      </form>
    </div>
  );
}

export default App;

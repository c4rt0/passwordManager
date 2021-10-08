import "./App.css";
import { useState } from "react";
import Axios from "axios";

function App() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [service, setService] = useState("");

  const addpassword = () => {
    Axios.post("http://localhost:3001/addpassword", {
      user: user,
      password: password,
      service: service,
    });
    console.log("Data saved!");
  };
  return (
    <div className="App">
      <div className="InsertingPassword">
        <input
          type="text"
          placeholder="user"
          onChange={(event) => {
            setUser(event.target.value);
          }}
        />
        <input
          type="text"
          placeholder="password"
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
        <input
          type="text"
          placeholder="service"
          onChange={(event) => {
            setService(event.target.value);
          }}
        />
        <button onClick={addpassword}>Add Password</button>
      </div>
    </div>
  );
}

export default App;

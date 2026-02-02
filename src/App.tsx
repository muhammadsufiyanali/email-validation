import { useState } from "react";
import "./App.css";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("===value");
    const value = e.target.value;
    setEmail(value);

    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!regex.test(value)) {
      setError("Invalid email");
    } else {
      setError("");
    }
  };

  const passwordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("===PassValue");
    const PassValue = e.target.value;
    setPassword(PassValue);

    const passwordregex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

    if (!passwordregex.test(PassValue)) {
      setError("Invalid password");
    } else {
      setError("");
    }
  };

  const handleSubmit = () => {
    if (email && password && !error) {
      alert("Login Successful");
    }else{
      alert("Plaese Enter Your Valid Fields")
    }
  };

  return (
    <div className="container">
      <h2 className="title">Login Form</h2>

      <input
        className="input"
        type="text"
        value={email}
        onChange={handleChange}
        placeholder="Enter email"
      />

      <input
        className="input"
        type="text"
        value={password}
        onChange={passwordChange}
        placeholder="Enter password"
      />

      {error && <p className="error">{error}</p>}

      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default App;



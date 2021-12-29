import axios from "axios";
import { useRef } from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import "./register.scss";

export default function Register() {
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const history = useHistory();

  const passwordRef = useRef();
  const usernameRef = useRef();

  const handleStart = () => {
    setUsername(usernameRef.current.value);
  };
  const handleFinish = async (e) => {
    e.preventDefault();
    setPassword(passwordRef.current.value);
    try {
      await axios.post("/users/register", { username, password });
      history.push("/login");
    } catch (err) {}
  };
  return (
    <div className="register">
      <div className="top">
        <div className="wrapper">
          <img
            className="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""
          />
          <button className="loginButton" href='/login'>Sign In</button>
        </div>
      </div>
      <div className="container">
        <h2>1. Đặt hàng thuận lợi</h2>
        <h2>2. Ưu đãi cho người dùng</h2>
        <p>
          Ngại gì mà không trở thành member để thỏa sức mua sắm trên thế giới di động?
        </p>
        {!username ? (
          <div className="input">
            <input type="username" placeholder="username" ref={usernameRef} />
            <button className="registerButton" onClick={handleStart}>
              Get Started
            </button>
          </div>
        ) : (
          <form className="input">
            <input type="password" placeholder="password" ref={passwordRef} />
            <button className="registerButton" onClick={handleFinish}>
              Start
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

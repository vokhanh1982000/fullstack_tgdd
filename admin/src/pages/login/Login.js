import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signin } from "../../redux/actions/userActions";
import "./login.css";
import { useHistory } from "react-router";
import { toast, ToastContainer } from "react-toastify";
import { useEffect } from "react";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const history = useHistory();

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo, loading, error, success } = userSignin;

  const submitHandler = (e) => {
    e.preventDefault();
    if (!username || !password) {
      return toast.warning("Please input username or password");
    }
    else {
    dispatch(signin(username, password));
    }
  };

  useEffect(() => {
    if(success == false) {
      toast.error("Incorrect username or password!");
    }
  }, [success]);

  return (
    <div className="login">
      <ToastContainer />
      <form className="loginForm" onSubmit={submitHandler}>
        <h3 className="title">Login</h3>
        {loading && <h3>Loading</h3>}
        {error && <p>{error}</p> }
        <input
          type="text"
          placeholder="username"
          className="loginInput"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          className="loginInput"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className="loginButton"
          type="submit"
        >
          Login
        </button>
      </form>
    </div>
  );
}
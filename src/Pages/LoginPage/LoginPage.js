
import "./LoginPage.css"
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {authAction} from "../../Store/Auth/AuthSlice";


const LoginPage = (props) => {

    const login = (username, password) => {
        dispatch(authAction.login({username:username, password: password}));
        //TODO: Navigate To homepage
    };

    const dispatch = useDispatch();
    const loginMessage = useSelector((state) => state.auth.auth.loginMessage);
    //const data = useSelector((state) => state.auth.value.loggedInError);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
  return (
    <div className="Root">
      <div className="Top-Field">
        <span className="Title"> E-Soccer Field </span>
        <span className="Description"> Servise For Soccer Field Booking </span>
      </div>
      <form
        className="Input-Form"
        onSubmit={(e) => {
          e.preventDefault();
          login(username, password);
        }}
      >
        <div className="Username-Container Container">
          <span> Username </span>
          <input required={true} type={"text"} placeholder={"Username"} onChange={
              (event)=>{
                var value = event.target.value;
                console.log("Username: ", value);
                setUsername(value);
          }}></input>
        </div>
        <div className="Password-Container Container">
          <span> Password </span>
          <input
            required={true}
            type={"password"}
            placeholder={"Password"}
            onChange={
              (event)=>{
                var value = event.target.value;
                console.log("Password: ", value);
                setPassword(value);
            }}
          ></input>
        </div>
        <div className="NewUser-Container">
          If You Don't Have Account ?<a href="\Register"> Register </a>
        </div>
        <div className="Login-Container Container">
            {loginMessage !== "" ? <h2>{loginMessage}</h2> : ""}
          <input type={"submit"} value={"Login"}></input>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;

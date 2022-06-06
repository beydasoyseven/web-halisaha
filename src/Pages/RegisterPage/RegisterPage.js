import "./RegisterPage.css"
import {useState} from "react";
import {authAction} from "../../Store/Auth/AuthSlice";
import {useDispatch, useSelector} from "react-redux";

const RegisterPage = (props) =>{

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repassword, setRepassword] = useState("");

    const dispatch = useDispatch();
    const registerMessage = useSelector((state)=>state.auth.auth.registerMessage);
    const register = (username, email, password, repassword) => {
        dispatch(authAction.register({username: username, email: email, password: password, repassword: repassword}));
    }

    return (
        <div className = "Root">
            <div className="Top-Field">
        <span className="Title"> E-Soccer Field </span>
        <span className="Description"> Servise For Soccer Field Booking </span>
      </div>
      <form
        className="Input-Form"
        onSubmit={(e) => {
          e.preventDefault();
          register(username, email, password, repassword);
          //TODO: Login page e navigate edilebilir.
        }}
      >
        <div className="Username-Container Container">
          <span> Username </span>
          <input required={true} type={"text"} placeholder={"Username"} onChange={
              (event)=>{
                  var value = event.target.value;
                  console.log(value);
                  setUsername(value);
              }
          }></input>
        </div>
          <div className="Email-Container Container">
              <span> Email </span>
              <input required={true} type={"text"} placeholder={"Email"} onChange={
                  (event)=>{
                  var value = event.target.value;
                  console.log(value);
                  setEmail(value);
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
                console.log(value);
                setPassword(value);
            }}
          ></input>
        </div>
        <div className="Re-Password-Container Container">
          <span> Re-Password </span>
          <input
            required={true}
            type={"password"}
            placeholder={"Re-Password"}
            onChange={
                (event)=>{
                    var value = event.target.value;
                    console.log(value);
                    setRepassword(value);
                }
            }
          ></input>
        </div>
        <div className="OldUser-Container">
          If You Have Account<a href="\Login"> Login </a>
        </div>
        <div className="Login-Container Container">
            {registerMessage !== "" ? <h2>{registerMessage}</h2>: ""}
          <input type={"submit"} value={"Register"}></input>
        </div>
      </form>
        </div>  
    );

}

export default RegisterPage;


import "./App.css";

function App() {
  return (
    <div className="App">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          login();
        }}
      >
        <div>
          <span> Username </span>
          <input type={"text"} placeholder={"Username"}></input>
        </div>
        <div>
          <span> Password </span>
          <input type={"password"} placeholder={"Password"}></input>
        </div>
        <input type={"submit"}></input>
      </form>
    </div>
  );
}

const login = ()=>{
  
}


export default App;

import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login(props) {

  //storing the useNavigate function in a variable
  const navigate = useNavigate();

  //getting the values from user array
  const users = props.users;
  const setUsers = props.users;


  // state variable for username input
  const [eusername, setEusername] = useState("");

  // state variable for username input
  const [epassword, setEpassword] = useState("");

  // state variable for checking registered user
  //setting "true" will consider the user will be registered user indefault
  const [ruser, setRuser] = useState(true);

  // Function for handling username input

  function handleUsernameinput(event) {
    setEusername(event.target.value);
  }

  // Function for handling password input

  function handlepasswordinput(event) {
    setEpassword(event.target.value);
  }

  //Function for handling click on Login button

  function checkUser() {

    var userfound = false

    console.log(users)
    users.forEach(function (item) {
      if (item.username === eusername && item.password === epassword) {
        console.log("login Successful");
        userfound = true;
        navigate("/landing",{state:{user:eusername}}) //while navigating sending required data as an object in a state variable
      } 
      // else {
      //   console.log("login Failed");
      //   setRuser(false);
      // }
    });

    if(userfound==false){
      console.log("login failed")
      setRuser(false);
    }
  }

  return (
    <div className=" bg-black  p-10">
      <div className="bg-[#EFEFEF] p-10 border rounded-md">
        <h1 className=" text-3xl font-medium">Hey Hi</h1>
        {ruser ? (
          <p>I help you to manage your activities after you login :)</p>
        ) : (
          <p className=" text-red-500">Please sign up before you login</p>
        )}

        <div className="flex flex-col gap-2 my-2">
          <input
            type="text"
            className="w-52 border-black -md p-1 bg-transparent border rounded"
            placeholder="Username"
            onChange={handleUsernameinput}
          ></input>
        </div>

        <div className="flex flex-col gap-2 my-2">
          <input
            type="text"
            className="w-52 border-black -md p-1 bg-transparent border rounded"
            placeholder="Password"
            onChange={handlepasswordinput}
          ></input>
        </div>

        <button
          onClick={checkUser}
          className=" bg-[#8272DA] w-24 p-1 rounded-md"
        >
          Login
        </button>

        <p>
          Don't have an account?{" "}
          <Link to={"/signup"} className=" underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;

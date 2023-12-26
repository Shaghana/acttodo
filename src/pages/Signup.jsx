import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup(props) {
  //storing the useNavigate function in a variable
  const navigate = useNavigate();

  //getting the values from user array
  const users = props.users;
  const setUsers = props.setUsers;

  // state variable for username input
  const [eusername, setEusername] = useState("");

  // state variable for username input
  const [epassword, setEpassword] = useState("");

  // Function for handling username input

  function handleUsernameinput(event) {
    setEusername(event.target.value);
  }

  // Function for handling password input

  function handlepasswordinput(event) {
    setEpassword(event.target.value);
  }

  //Function for adding User

  function addUser() {
    setUsers([...users, { username: eusername, password: epassword }]);
    navigate("/");
  }

  return (
    <div className=" bg-black  p-10">
      <div className="bg-[#EFEFEF] p-10 border rounded-md">
        <h1 className=" text-3xl font-medium">Hey Hi</h1>
        <p>Sign Up here ;)</p>

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

        <div className="flex flex-col gap-2 my-2">
          <input
            type="text"
            className="w-52 border-black -md p-1 bg-transparent border rounded"
            placeholder="Confirm password"
          ></input>
        </div>

        <button onClick={addUser} className=" bg-[#FCA201] w-24 p-1 rounded-md">
          Sign Up
        </button>

        <p>
          Already have an account?{" "}
          <Link to={"/"} className=" underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;

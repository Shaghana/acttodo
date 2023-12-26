// import React from 'react';
import {BrowserRouter,Link, Route, Routes} from "react-router-dom"
import Signup from "./pages/Signup.jsx"
import Login from "./pages/Login.jsx"
import Landing from "./pages/Landing.jsx"
import { useState } from "react";



function App() {

       //Creating Array for managing username and password
       //Values can be passed only from parent to child
       //This array values are passed to both login and Sign up pages
       const [users, setUsers] = useState([
        {
          username: "sha",
          password: "321@",
        },
      ]);


  return (
    <>
    <BrowserRouter> 
    
    <Routes>
    <Route path='/' element={<Login users={users} setUsers={setUsers} />}></Route>
    <Route path='/signup' element={<Signup users={users} setUsers={setUsers} />}></Route>
    <Route path='/Landing' element={<Landing />}></Route>
    
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;

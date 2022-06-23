import React, { useState }from "react";
//import styled, {css} from "styled-components";
import { Link } from "react-router-dom";

function LoginPage({ setUser }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("")
  
    function handleSubmit(e) {
      e.preventDefault();
      fetch("/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username: username, password: password  }),
      })
        .then((r) => r.json())
        .then((user) => setUser(user));
    }
  
    return (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
          <input
          type="text"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    );
  }

    // const [login, setLogin] = useState({
    //   username: '',
    //   password: '',
    // })

  
    // const handleChange = (event) => {
    //   const name = event.target.name;
    //   const value = event.target.value;
  
    //   setLogin({
    //     ...login,
    //     [name]: value
    //   })
    // } 
  // return (
  //     <div>

  //        <h1>SIGN IN</h1>
  //        <form onSubmit={handleSubmit}>
  //           <input type='text' name='username' onChange={handleChange} value={login.username} placeholder="username" />
  //            <input type='text' name='password' onChange={handleChange} value={login.password} placeholder="password" />
  //          <button>LOGIN</button>
  //            {/* <Link>DO NOT YOU REMEMBER THE PASSWORD?</Link>
  //          <Link>CREATE A NEW ACCOUNT</Link> */}
  //          </form>

  //       </div>
  //   );
  //  };



  export default LoginPage;

//   const Container = styled.div`
//   width: 100vw;
//    height: 100vh;
//    background: linear-gradient(
//        rgba(255, 255, 255, 0.5),
//        rgba(255, 255, 255, 0.5)
//      ),
//      url("https://images.unsplash.com/photo-1616036740257-9449ea1f6605?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3Vuc2V0JTIwYmVhY2h8ZW58MHx8MHx8&w=1000&q=80")
//        center;
//    background-size: cover;
//    display: flex;
//    align-items: center;
//    justify-content: center;
//  `;
 
//  const Wrapper = styled.div` 
//  width: 25%;
//    padding: 20px;
//    background-color: white;
//  `;
 
//  const Title = styled.h1`  
//  font-size: 24px;
//    font-weight: 300;
//  `;
 
//  const Form = styled.form`
//   display: flex;
//    flex-direction: column; 
//  `;
 
//  const Input = styled.input`
//    flex: 1;
//    min-width: 40%;
//    margin: 10px 0;
//    padding: 10px; 
//  `;
 
//  const Button = styled.button`
//    width: 40%;
//    border: none;
//    padding: 15px 20px;
//    background-color: teal;
//    color: white;
//    cursor: pointer;
//    margin-bottom: 10px; 
//  `;
 
//  const Link = styled.a` 
//  margin: 5px 0px;
//    font-size: 12px;
//    text-decoration: underline;
//    cursor: pointer; 
//  `;

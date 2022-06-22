import React from "react";
import { useState } from "react";
import styled from "styled-components";

const LoginPage = () => {

const Container = styled.div
  ` width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.unsplash.com/photo-1616036740257-9449ea1f6605?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3Vuc2V0JTIwYmVhY2h8ZW58MHx8MHx8&w=1000&q=80")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center; `
;

const Wrapper = styled.div
` width: 25%;
  padding: 20px;
  background-color: white; `

;

const Title = styled.h1
`  font-size: 24px;
  font-weight: 300; `
;

const Form = styled.form
` display: flex;
  flex-direction: column; `
;

const Input = styled.input
`  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px; `
;

const Button = styled.button
`  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px; `
;

const Link = styled.a
`  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer; `
;
    const [login, setLogin] = useState({
      username: '',
      password: '',
    })
  
  
    const handleSubmit = (event) => {
      event.preventDefault();
      console.log(login)
      setLogin(login)
    }
  
    const handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
  
      setLogin({
        ...login,
        [name]: value
      })
    } 
  return (
      <Container>
        <Wrapper>
          <Title>SIGN IN</Title>
          <Form onSubmit={handleSubmit}>
            <Input type='text' name='username' onChange={handleChange} value={login.username} placeholder="username" />
            <Input type='text' name='password' onChange={handleChange} value={login.password} placeholder="password" />
            <Button>LOGIN</Button>
            <Link>DO NOT YOU REMEMBER THE PASSWORD?</Link>
            <Link>CREATE A NEW ACCOUNT</Link>
          </Form>
        </Wrapper>
      </Container>
    );
  };

  export default LoginPage;
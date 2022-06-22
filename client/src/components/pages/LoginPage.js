import React from "react";
import styled from "styled-components";

const Login = () => {

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
  
  export default Login;
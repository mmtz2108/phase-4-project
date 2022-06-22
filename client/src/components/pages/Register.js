import styled from "styled-components";
import {useState} from 'react';


const Container = styled.div `
  width: 100px;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://murals-weblinc.netdna-ssl.com/product_images/palm-trees-silhouette-at-sunset-38744478/5ecaa56f1330df0364b5754d/product_large_image.jpg?c=1590338927")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center; 
  `
;

const Wrapper = styled.div 
 ` width: 40%;
  padding: 20px;
  background-color: white; `

;

const Title = styled.h1
` font-size: 24px;
  font-weight: 300; `
;

const Form = styled.form
` display: flex;
  flex-wrap: wrap; `
;

const Input = styled.input
` flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px; `
;

const Agreement = styled.span
` font-size: 12px;
  margin: 20px 0px; `
;

const Button = styled.button
` width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer; `
;

const Register = () => {
    const [register, setRegister] = useState({
      name: '',
      lastName: '',
      userName: '',
      email: '',
      password: '',
      confirm: '',
    })
  
  
    const handleSubmit = (event) => {
      event.preventDefault();
      console.log(register)
      setRegister(register)
    }
  
    const handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
  
      setRegister({
        ...register,
        [name]: value
      })
    }
  return (
      <Container>
        <Wrapper>
          <Title>CREATE AN ACCOUNT</Title>
          <Form onSubmit={handleSubmit}>
            <Input type='text' name='name' onChange={handleChange} value={register.name} placeholder="name" />
            <Input type='text' name='lastName' onChange={handleChange} value={register.lastName} placeholder="last name" />
            <Input type='text' name='userName' onChange={handleChange} value={register.userName} placeholder="username" />
            <Input type='text' name='email' onChange={handleChange} value={register.email} placeholder="email" />
            <Input type='text' name='password' onChange={handleChange} value={register.password} placeholder="password" />
            <Input type='text' name='confirm' onChange={handleChange} value={register.confirm} placeholder="confirm password" />
            <Agreement>
              By creating an account, I consent to the processing of my personal
              data in accordance with the <b>PRIVACY POLICY</b>
            </Agreement>
            <Button>CREATE</Button>
          </Form>
        </Wrapper>
      </Container>
    );
  };
  
  export default Register;
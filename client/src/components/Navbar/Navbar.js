
import styled from "styled-components";
const Navbar = () => {


    return (
      <Container>
        <Wrapper>
  
          <nav>
          <NavLink to="/">
          <Center>
            <Logo>ReactCo</Logo>
          </Center>
          </NavLink>
          </nav>
  
          <Right>
            <nav>
            <NavLink to="/Register">
            <MenuItem>POST</MenuItem>
            </NavLink>
            </nav>
  
            <nav>
            <NavLink to="/Login">
            <MenuItem>SIGN OUT</MenuItem>
            </NavLink>
            </nav>
            <nav>
            <NavLink to="/Cart">
            <MenuItem>
              <Badge color="primary">
                <ShoppingCartOutlined />
              </Badge>
            </MenuItem>
            </NavLink>
            </nav>
          </Right>
        </Wrapper>
      </Container>
    );
  };
  
  export default Navbar;
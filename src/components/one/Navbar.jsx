import styled from "styled-components";
import logo from "../../images/logo2.svg";
import USA_flag from "../../images/usflag.svg";
import cart from "../../images/cart.svg";
import profile from "../../images/profile.svg";
import searchicon from "../../images/searchicon.svg";




const Container = styled.div`
    display: flex;
    justify-content: space-between;
    background-color: #FFFFFF;
    width: 1189px;
    height: 72px;
    margin-top: 35px;
    margin-x: 80px;
    border-radius: 10px;
    align-items: center;
    
`

const Left = styled.img`
 width: 92px;
 height: 29px;
 margin-left: 20px;

      &:hover {
      cursor: pointer;
    }

`



const Center = styled.div`
 width: 535px;
 height: 24px;
 display: flex;
 gap: 20px;
`

const Right = styled.div`
 display: flex;
 align-items: center;
 gap: 20px;
  margin-right: 20px;


`

const Text = styled.div`
 color: #212121;
 font-family: Roboto;
     &:hover {
      text-decoration: underline;
      cursor: pointer;
    }

`
const USflag = styled.img`
    width: 28px;
    height: 28px;

    &:hover {
      cursor: pointer;
    }
`

const CartIcon = styled.img`
    width: 17.46px;
    height: 22.04px;
    color: #212121;
          &:hover {
      cursor: pointer;
    }
`

const Profile = styled.img`
    width: 18.94px;
    height: 21.31px;
    color: #212121;
          &:hover {
      cursor: pointer;
    }
`
const SearchIcon = styled.img`
    width: 23.35px;
    height: 23.17px;
    color: #212121;

    &:hover {
      cursor: pointer;
    }
`

const Navbar = () => {

    return (
    <Container>
        <Left src={logo} alt="logo"/>
        <Center>
            <Text>Home</Text>
            <Text>Getting started</Text>
            <Text>Product</Text>
            <Text>Documentation</Text>
            <Text>Integration</Text>
        </Center>
        <Right>
            <SearchIcon src={searchicon}/>
            <Profile src={profile}/>
            <USflag src={USA_flag} alt="usa flag"/>
            <CartIcon src={cart}/>
        </Right>

    </Container>
    )

}

export default Navbar;
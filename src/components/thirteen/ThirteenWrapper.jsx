import styled from "styled-components";
import userpermission from "../../images/userpermission.svg"


const Container = styled.div`
    width: 1190px;
    height: 486px;
    margin-top: 108px;
    margin-right: 80px;
    margin-left: 79px;
    display: flex;

`

const Right = styled.div`
    width: 564px;
    height: 486px;
    display: flex;
    flex-direction: column;
    align-items: center;

`

const Left = styled.img`
    width: 626px;
    height: 486px;
`

const TextWrapper = styled.div`
  width: 482px;
    height: 234px;
    margin-right: 80px;
    margin-left: 82px;
    margin-top: 135px;
    margin-bottom: 117px;

`

const Title1 = styled.div`
  width: 452px;
    height: 55px;
    font-family: Helvetica;
    font-weight: bold;
    font-size: 40px;
    color: #5C755E;
`
const Title2 = styled.div`
  width: 452px;
    height: 52px;
    margin-top: 4px;
    font-family: Helvetica;
    font-weight: bold;
    font-size: 36px;
    color: #212121;
`

const Description = styled.div`
  width: 482px;
    height: 110px;
    margin-top: 23px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-family: Roboto;
    font-weight: medium;
    font-size: 16px;
    color: #212121;
`


const ThirteenWrapper = () => {

    return(
        <Container>
            <Left src={userpermission}/>
            <Right>
                <TextWrapper>
                    <Title1>User Permission</Title1>
                    <Title2>Management</Title2>

                    <Description>
                        <div>Customizable access levels for family members, guests, or Airbnb renters.</div>
                        <div>Different permissions can be set for children (limited access) vs. Airbnb guests (temporary access).</div>
                    </Description>

                </TextWrapper>
            </Right>
        </Container>
    )

}

export default ThirteenWrapper;
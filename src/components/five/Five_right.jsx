import styled from "styled-components";
import toggleswitch from "../../images/toggleswitch.svg"
import routineLink from "../../images/routineLink.svg"



const Container = styled.div`
    width: 556px;
    height: 556px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

const Wrapper = styled.div`
    width: 526px;
    height: 297px;
`

const Top = styled.div`
     width: 509px;
    height: 181px;
`

const Bottom = styled.div`
     width: 526px;
    height: 92px;
    margin-top: 24px;
    display: flex;
`

const Heading = styled.div`
     width: 474px;
    height: 48px;
    font-family: Helvetica;
    font-weight: bold;
    font-size: 36px;
    color: #212121;
`

const Body = styled.div`
     width: 509px;
    height: 113px;
    font-family: Roboto;
    font-weight: medium;
    font-size: 16px;
    color: #212121;
`

const Bottom_left = styled.div`
     width: 287px;
    height: 92px;
`

const Text = styled.div`
     width: 284px;
    height: 48px;
    font-family: Helvetica;
    font-weight: bold;
    font-size: 24px;
    color: #212121;
    display: flex;
    flex-direction: column;
    justify-content: center;

`

const SwitchWrapper = styled.div`
    width: 284px;
    height: 48px;
`
const Switch = styled.img`
    width: 73px;
    height: 49px;

`

const Bottom_right = styled.div`
     width: 287px;
    height: 92px;
    display: flex;
    flex-direction: column;
    justify-content: center;

`

const RoutineLink = styled.img`
    width: 147px;
    height: 22px;
    margin-left: auto;
    transition: transform 0.2s ease-in-out; 
    &:hover {
        cursor: pointer;
        transform: scale(1.2); 
    }
`

const Five_right = () => {
    return (
        <Container> 
            <Wrapper>
                <Top>
                    <Heading>Heading title will go here</Heading>
                    <Body>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem</Body>
                </Top>
                <Bottom>
                    <Bottom_left>
                        <Text><div>Activate Routine</div></Text>
                        <SwitchWrapper>
                            <Switch src={toggleswitch}/>
                        </SwitchWrapper>
                    </Bottom_left>
                    <Bottom_right>
                        <RoutineLink src={routineLink}/>
                    </Bottom_right>
                </Bottom>
            </Wrapper>
        </Container>
    )
}

export default Five_right;
import styled from "styled-components";
import logoPlusText from "../../images/logoplustext.svg"
import flow from "../../images/flow.svg"
import warninglogo from "../../images/warninglogo.svg"
import phonelogo from "../../images/phonelogo.svg"





const Container = styled.div`
    width: 1196px;
    height: 747px;
    margin-top: 63px;
    margin-left: 83px;
    margin-right: 70px;
    margin-bottom: 104px;
    display: flex;

`

const Left = styled.div`
    width: 403px;
    height: 747px;
    display: flex;
    flex-direction: column;
`

const Text = styled.div`
        width: 403px;
        height: 146px;
        margin-top: 44px;
        display: flex;
        flex-direction: column;
`

const LogoPlusText = styled.img`
        width: 403px;
        height: 84px;
`

const BodyText = styled.div`
        width: 403px;
        height: 44px;
        font-family: Roboto;
    font-size: 16px;
    font-weight: medium;
    color: #FFFFFF;
    margin-top: 18px;
`

const Right = styled.div`
        width: 749px;
        height: 747px;
        display: flex;
        flex-direction: column;
        align-items: center;
`

const FlowDiagram = styled.img`
       width: 739px;
        height: 627px;
`

const Note = styled.div`
       width: 739px;
        height: 111px;
        margin-top: 9px;
        display: flex;
        gap: 31px;
`

const Item = styled.div`
       width: 356px;
        height: 111px;
        display: flex;

`

const LogoWrapper = styled.div`
     width: 72px;
        height: 111px;
    display: flex;
    flex-direction: column;
    
`

const TextBottom = styled.div`
     width: 384px;
    height: 111px;
    margin-left: 14px;
`
const RoundLogo = styled.img`
    width: 54px;
    height: 54px;
`

const Title = styled.div`
    width: 284px;
    height: 42px;
    font-family: Helvetica;
    font-size: 24px;
    font-weight: bold;
    color: #FFFFFF;
`

const Message = styled.div`
    width: 259px;
    height: 66px;
    font-family: Roboto;
    font-size: 16px;
    font-weight: medium;
    color: #FFFFFF;
`


const SixContainer = () => {
    return (
        <Container> 
            <Left>
                <Text>
                    <LogoPlusText src={logoPlusText}/>
                    <BodyText>Experience proactive, AI-driven control that adapts to your needs—even when you’re not around.</BodyText>
                </Text>
            </Left>
            <Right>
                <FlowDiagram src={flow}/>
                <Note>
                    <Item >
                        <LogoWrapper>
                            <RoundLogo src={warninglogo}/>
                        </LogoWrapper>
                        <TextBottom>
                            <Title>Alert</Title>
                            <Message>Send an immediate notification to the user, with a live feed from
                            security cameras.</Message>
                        </TextBottom>
                    </Item>
                    <Item>
                        <LogoWrapper>
                            <RoundLogo src={phonelogo}/>
                        </LogoWrapper>
                        <TextBottom>
                        <Title>Follow-up</Title>
                            <Message>AI initiates a check with nearby trusted contacts or security services if the user doesn’t respond.</Message>
                        </TextBottom>
                    </Item>
                </Note>
            </Right>

        </Container>
    )
}

export default SixContainer;
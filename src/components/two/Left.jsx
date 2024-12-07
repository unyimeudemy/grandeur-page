import styled from "styled-components";
import smartroom from "../../images/smartroom.svg"


const Container = styled.div`
    width: 640px;
    height: 658px;
`
const Heading = styled.div`
    width: 640px;
    height: 84px;
    font-family: Helvetica;
    font-weight: bold;
    font-size: 36px;
    color: #212121;
`

const Text = styled.div`
    width: 570px;
    height: 66px;
    font-family: Helvetica;
    font-weight: medium;
    font-size: 16px;
    color: #212121;
    margin-top: 18px;
`

const Picture = styled.img`
    width: 622px;
    height: 481px;
    border-radius: 15px;
`

const Left = () => {

    return (
        <Container>
            <Heading>Experience the Power of AI-Assisted Living</Heading>
            <Text>See how AI-driven automations transform home energy management, security, and comfort.</Text>
            <Picture src={smartroom} />
        </Container>
    )

}

export default Left;
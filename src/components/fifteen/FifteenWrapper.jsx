import styled from "styled-components";
import DevicesFifteen from "../../images/DevicesFifteen.svg"


const Container = styled.div`
    width: 1226px;
    height: 813px;
    margin-top: 189px;
`

const TextWrapper = styled.div`
    width: 1226px;
    height: 124px;
    display: flex;
    justify-content: center;
`

const Text = styled.div`
    width: 690px;
    height: 124px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Big = styled.div`
    width: 690px;
    height: 84px;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: Helvetica;
    font-weight: bold;
    font-size: 36px;
    color: #212121;
`

const Small = styled.div`
    width: 521px;
    height: 22px;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: Robot;
    font-weight: medium;
    font-size: 16px;
    color: #212121;
`

const DevicesImage = styled.img`
    width: 1226px;
    height: 620px;
    margin-top: 69px;
`

const FifteenWrapper = () => {
    return (
        <Container>
            <TextWrapper>
                <Text>
                    <Big>
                        <div>Innovative Automation Suggestions</div>
                        <div>Embedded Throughout</div>
                    </Big>
                    <Small><div>Explore practical scenarios where SMART automation shines</div></Small>
                </Text>
            </TextWrapper >
            <DevicesImage src={DevicesFifteen}/>

        </Container>
    )

}

export default FifteenWrapper;
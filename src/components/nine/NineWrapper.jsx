import styled from "styled-components";
import smartLeft from "../../images/smartLeft.svg"
import smartRight from "../../images/smartRight.svg"


const Container = styled.div`
    width: 1186px;
    height: 246px;
    display: flex;
    justify-content: space-between;
    align-items: center;

`

const TextBlock = styled.div`
    width: 521px;
    height: 132px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 18px;
`

const Image = styled.img`
    width: 246px;
    height: 246px;
`

const Title = styled.div`
      width: 521px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: Helvetica;
    font-weight: bold;
    font-size: 36px;
    color: #FFFFFF;
`

const TextBody = styled.div`
    width: 443px;
    height: 66px;
    font-family: Roboto;
    font-weight: medium;
    font-size: 16px;
    color: #FFFFFF;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const NineWrapper = () => {
    

    return (
        <Container>
            <Image src={smartLeft}/>
            <TextBlock>
                <Title>Automated Recommendations</Title>
                <TextBody> 
                    <div> analyzes user habits and suggests</div>
                    <div>personalized flows like “Would you like to activate ‘Night</div>
                    <div>Mode’ automatically at 9 PM?</div>
                </TextBody>
            </TextBlock>
            <Image src={smartRight}/>
        </Container>
    )
}

export default NineWrapper;
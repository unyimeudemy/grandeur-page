import styled from "styled-components";
import Grandeursmart from "../../images/grandeursmart.svg"
import smarthome from "../../images/smarthome.svg"
import fourdots from "../../images/fourdots.svg"



const Container = styled.div`
    width: 1189px;
    height: 492px;
    margin-top: 59px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
`

const Wrapper = styled.div`
    width: 1189px;
    height: 427px;
    display: flex;
    margin-bottom: 50px;
`

const Left = styled.div`
    width: 663px;
    height: 400px;

`

const Right = styled.img`
    width: 434px;
    height: 419px;
`

const Heading = styled.div`
    width: 662px;
    height: 132px;
    font-family: Helvetica;
    font-size: 55px;
    font-weight: bold;
    color: #FFFFFF;
`

const Text = styled.div`
    width: 597px;
    height: 166px;
    margin-top: 11px;
    color: #FFFFFF;

`

const SubHeading = styled.div`
    width: 544px;
    height: 44px;
    font-family: Roboto;
    font-size: 16px;
    font-weight: medium;
`

const Textpoint = styled.div`
    margin-top: 17px;
    width: 599px;
    height: 105px;
    gap: 11px;
    display: flex;
    flex-direction: column;
`

const Point = styled.div`
    width: 586px;
    height: 28px;
    display: flex;
    align-items: center;
`

const SmartHouseLogo = styled.img`
    width: 28px;
    height: 28px;
    color: #FFFFFF;
    margin-right: 7px;
`

const Describtion = styled.div`
    font-family: Roboto;
    font-weight: regular;
    font-size: 16px;
`

const Button = styled.button`
    background-color: #A97D5D;
    width: 158px;
    height: 52px;
    display: flex;
    justify-content: center;
    color: #FFFFFF;
    border-radius: 30px;
    align-items: center;
    border: none;
    margin-top: 39px;
    transition: transform 0.2s ease-in-out; 
    &:hover {
        cursor: pointer;
        transform: scale(1.2);
    }

`

const ButtonText = styled.div`
 font-family: Helvetica;
 font-weight: bold;
 font-size: 16px;


`

const Paginator = styled.img`
    width: 84px;
    height: 15px;
`

const PaginatorWrap = styled.div`
    display: flex;
    justify-content: center;
`

const Body = () => {
    return (
        <Container>
            <Wrapper>
            <Left>
                <Heading>Optimize Your Energy With Grandeur Smart</Heading>
                <Text>
                    <SubHeading>Reduce costs and increase efficiency with smart energy insights tailored to your usage.</SubHeading>
                    <Textpoint>
                        <Point>
                            <SmartHouseLogo src={smarthome} alt="smarthome"/>
                            <Describtion>Reduce heating during peak hours to save 20% on energy costs.</Describtion>
                        </Point>
                        <Point>
                            <SmartHouseLogo src={smarthome} alt="smarthome"/>
                            <Describtion>Run appliances after 9 PM for reduced rates & energy efficiency.</Describtion>
                        </Point>
                        <Point>
                            <SmartHouseLogo src={smarthome} alt="smarthome"/>
                            <Describtion>Switch to eco-mode in the early afternoon to save energy.</Describtion>
                        </Point>

                    </Textpoint>
                </Text>
                <Button>
                    <ButtonText>Learn More</ButtonText>
                </Button>
            </Left>
            <Right src={Grandeursmart}/>
            </Wrapper>
            <PaginatorWrap>
                <Paginator src={fourdots}/>
            </PaginatorWrap>
        </Container>
    )
}

export default Body;
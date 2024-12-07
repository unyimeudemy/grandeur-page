import styled from "styled-components";
import Navbar from "../components/one/Navbar.jsx";
import Body from "../components/one/Body.jsx";
import Left from "../components/two/Left.jsx";
import Right from "../components/two/Right.jsx";
import Top from "../components/three/Top.jsx";
import Bottom from "../components/three/Bottom.jsx";
import ImageCarousel from "../components/four/ImageCarousel.jsx";
import Five_right from "../components/five/Five_right.jsx";
import nightmode from "../images/nightmode.svg"
import customizeyourhome from "../images/customize.svg"
import enhancecustomization from "../images/enhance.svg"
import flow2 from "../images/flow2.svg"
import twelveImage from "../images/twelveImage.svg"
import fourteenImage from "../images/fourteenImage.svg"
import SixContainer from "../components/six/SixContainer.jsx";
import NineWrapper from "../components/nine/NineWrapper.jsx";
import TenWrapper from "../components/ten/TenWrapper.jsx";
import ElevenWrapper from "../components/eleven/ElevenWrapper.jsx";
import ThirteenWrapper from "../components/thirteen/ThirteenWrapper.jsx";
import FifteenWrapper from "../components/fifteen/FifteenWrapper.jsx";
import SixteenWrapper from "../components/sixteen/SixteenWrapper.jsx";
import FooterWrapper from "../components/Footer/FooterWrapper.jsx";


const Container = styled.div`
    background-color: #FFFFFF;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const One = styled.div`
    width: 1349px;
    height: 699px;
  background: linear-gradient(to left, #5C755E, #78A67C);
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Two = styled.div`
    width: 1220px;
    height: 658px;
  display: flex;
  align-items: center;
  margin-top: 54px;
`

const Three = styled.div`
    width: 1227px;
    height: 746px;
    margin-top: 123px;
`

const Four = styled.div`
    width: 1349px;
    height: 492px;
  background: linear-gradient(to left, #78A67C, #5C755E);
    margin-top: 129px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 40px;
    flex-direction: column;
`

const Text = styled.div`
    width: 746px;
    height: 142px;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 18px;

`
const Title = styled.div`
    width: 648px;
    height: 50px;
    font-family: Helvetica;
    font-weight: bold;
    font-size: 36px;
    color: #FFFFFF;
`

const BodyText = styled.div`
    width: 746px;
    height: 74px;
    font-family: Roboto;
    font-weight: medium;
    font-size: 16px;
    color: #FFFFFF;
`

const Five = styled.div`
    width: 1171px;
    height: 596px;
    margin-top: 115px;
    display: flex;
    gap: 89px;

`

const Five_left = styled.img`
    width: 556px;
    height: 556px;
`

const Six = styled.div`
    width: 1349px;
    height: 914px;
      background: linear-gradient(to left, #78A67C, #5C755E);

`

const Seven = styled.div`
    width: 1186px;
    height: 701px;
    margin-top: 98px;
    margin-left: 80px;
    margin-right: 83px;
    display: flex;
    gap: 28px;
`

const LeftImage = styled.img`
    width: 579px;
    height: 701px;
    transition: transform 0.2s ease-in-out; 
    &:hover {
        cursor: pointer;
        transform: scale(1.03);
    }
`

const RightImage = styled.img`
    width: 579px;
    height: 701px;
    transition: transform 0.2s ease-in-out; 
    &:hover {
        cursor: pointer;
        transform: scale(1.03);
    }
`

const Eight = styled.div`
    width: 1186px;
    height: 937px;
    margin-top: 109px;
    display: flex;
    flex-direction: column;
`

const TextBoxWrapper = styled.div`
   width: 1186px;
    height: 136px;
    display: flex;
    justify-content: center;
`

const TextBox = styled.div`
   width: 947px;
    height: 136px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const FlowImage2 = styled.img`
   width: 1186px;
    height: 739px;
    margin-top: 62px;
`

const TopText = styled.div`
   width: 947px;
    height: 55px;
    font-family: Helvetica;
    font-weight: bold;
    font-size: 40px;
    color: #5C755E;
    display: flex;
    justify-content: center;
`

const MiddleText = styled.div`
   width: 452px;
    height: 42px;
    font-family: Helvetica;
    font-weight: bold;
    font-size: 36px;
    color: #212121;
    margin-top: 4px;
`

const BottomText = styled.div`
   width: 521px;
    height: 22px;
    display: flex;
    justify-content: center;
    font-family: Roboto;
    font-weight: medium;
    font-size: 16px;
    color: #212121;
    margin-top: 13px;
`

const Nine = styled.div`
    width: 1349px;
    height: 406px;
    background: linear-gradient(to left, #78A67C, #5C755E);
    display: flex;
    align-items: center;
    justify-content: center;

`

const Ten = styled.div`
  width: 1207px;
    height: 1284px;
    margin-top: 72px;
    margin-right: 76px;
    margin-left: 66px;
`

const Eleven = styled.div`
  width: 1349px;
    height: 1474px;
`

const Twelve = styled.div`
  width: 1349px;
    height: 784px;
    background: linear-gradient(to left, #78A67C, #5C755E);

`
const TwelveImage = styled.img`
  width: 1191px;
    height: 601px;
    margin-top: 109px;
    margin-right: 80px;
    margin-left: 78px;
    margin-bottom: 74px;

`

const Thirteen = styled.div`
`

const Fourteen = styled.div`
`

const FourteenImage = styled.img`
  width: 1189px;
    height: 656px;
    margin-top: 126px;
`

const Fifteen = styled.div`
`

const Sixteen = styled.div`
`

const Footer = styled.div`
    width: 1349px;
    height: 438px;
    background: linear-gradient(to left, #5C755E, #78A67C);
    margin-top: 126px;

`


const Home = () => {
    return (
        <Container>
            <One>
                <Navbar/>
                <Body />
            </One>
            <Two>
                <Left />
                <Right/>
            </Two>
            <Three>
                <Top/>
                <Bottom/>
            </Three>
            <Four>
                <Text>
                    <Title>Multiple Integrations Suggested By AI</Title>
                    <BodyText>Discover the power of Smart AI, your intelligent companion designed to streamline processes, enhance productivity, and enable innovative solutions across platforms. With a focus on seamless integration, Smart AI connects with your favorite tools to create a unified experience tailored to your needs.</BodyText>
                </Text>
                <ImageCarousel/>
            </Four>
            <Five>
                <Five_left src={nightmode}/>
                <Five_right/>
            </Five>
            <Six>
                <SixContainer/>
            </Six>
            <Seven>
                <LeftImage src={customizeyourhome}/>
                <RightImage src={enhancecustomization}/>
            </Seven>
            <Eight>
                <TextBoxWrapper>
                    <TextBox>
                        <TopText><div>Flow Creation</div></TopText>
                        <MiddleText>Your space. Your control.</MiddleText>
                        <BottomText>Explore practical scenarios where SMART automation shines</BottomText>
                    </TextBox>
                </TextBoxWrapper>
                <FlowImage2 src={flow2}/>
            </Eight>
            <Nine>
                <NineWrapper/>
            </Nine>
            <Ten>
                <TenWrapper/>
            </Ten>
            <Eleven>
                <ElevenWrapper/>
            </Eleven>
            <Twelve>
                <TwelveImage src={twelveImage}/>
            </Twelve>
            <Thirteen>
                <ThirteenWrapper/>
            </Thirteen>
            <Fourteen>
                <FourteenImage src={fourteenImage}/>
            </Fourteen>
            <Fifteen>
                <FifteenWrapper/>
            </Fifteen>
            <Sixteen>
                <SixteenWrapper/>
            </Sixteen>
            <Footer>
                <FooterWrapper/>
            </Footer>
        </Container>
    )

}

export default Home;

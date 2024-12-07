import styled from "styled-components";
import twodot from "../../images/twodot.svg"
import devices1 from "../../images/devices1.svg"
import newEneryLink from "../../images/NewEnergyLink.svg"
import devices2 from "../../images/devices2.svg"
import seeSmartLink from "../../images/seeSmartLink.svg"
import viewSecurityLink from "../../images/viewSecurityLink.svg"
import devices3 from "../../images/devices3.svg"









const Container = styled.div`
    width: 1189px;
    height: 1279px;
    margin-top: 114px;
    margin-right: 80px;
    margin-left: 80px;
    margin-bottom: 80px;
    display: flex;
    flex-direction: column;
    gap: 80px;
`

const CardWrapper = styled.div`
    width: 1189px;
    height: 373px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

`

const Card = styled.div`
    width: 1189px;
    height: 312px;
    border-radius: 20px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
    display: flex;
 

`

const PaginationWrapper = styled.div`
    width: 1189px;
    height: 15px;
    display: flex;
    justify-content: center;

`

const Paginator = styled.img`
   width: 38px;
    height: 15px;
`

const InsideWrapper = styled.div`
   width: 1124px;
    height: 273px;
    margin-top: 24px;
    margin-down: 15px;
    margin-left: 65px;
    display: flex;
    gap: 113px;
`

const Left = styled.div`
   width: 517px;
    height: 273px;
    display: flex;
    align-items: center;
    justify-content: center;

`

const Right = styled.img`
   width: 494px;
    height: 273px;
`

const TextWrapper = styled.div`
       width: 517px;
    height: 160px;
`

const Title = styled.div`
    width: 474px;
    height: 48px;
    font-family: Helvetica;
    font-weight: bold;
    font-size: 36px;
    color: #212121;
`

const Body = styled.div`
    width: 517px;
    height: 44px;
    margin-top: 18px;
    font-family: Roboto;
    font-weight: medium;
    font-size: 16px;
    color: #212121;
`

const ExLink = styled.img`
    margin-top: 29px;
        width: 267px;
    height: 22px;
`

const InsideWrapper2 = styled.div`
   width: 1121px;
    height: 160px;
    margin-top: 73px;
    margin-down: 79px;
    margin-left: 63px;
    margin-right: 3px;
    display: flex;
`

const RightWrapper = styled.div`
   width: 682px;
    height: 160px;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Right2 = styled.img`
   width: 682px;
    height: 128px;
`

const Left2 = styled.div`
   width: 439px;
    height: 160px;
`

const Title2 = styled.div`
       width: 439px;
    height: 48px;
        font-family: Helvetica;
    font-weight: bold;
    font-size: 36px;
    color: #212121;
`

const Body2 = styled.div`
       width: 439px;
    height: 44px;
    margin-top: 18px;
       font-family: Roboto;
    font-weight: medium;
    font-size: 16px;
    color: #212121;
`

const ExLink2 = styled.img`
    width: 308px;
    height: 22px;
    margin-top: 29px;
`

const InsideWrapper3 = styled.div`
   width: 1093px;
    height: 181px;
    margin-top: 65px;
    margin-down: 66px;
    margin-left: 65px;
    margin-right: 31px;
    display: flex;
`

const Left3 = styled.div`
   width: 517px;
    height: 181px;
`

const RightWrapper3 = styled.div`
   width: 576px;
    height: 181px;
    display: flex;
    align-items: center;
`

const Title3 = styled.div`
       width: 474px;
    height: 48px;
    font-family: Helvetica;
    font-weight: bold;
    font-size: 36px;
    color: #212121;
`

const Body3 = styled.div`
       width: 517px;
    height: 66px;
    margin-top: 18px;
       font-family: Roboto;
    font-weight: medium;
    font-size: 16px;
    color: #212121;
`

const ExLink3 = styled.img`
    width: 267px;
    height: 22px;
    margin-top: 28px;
`

const Right3 = styled.img`
   width: 576px;
    height: 107px;
`

const ElevenWrapper = () => {

    return (
        <Container>
            <CardWrapper>
                <Card>
                    <InsideWrapper>
                        <Left>
                            <TextWrapper>
                                <Title>Energy Management Kit</Title>
                                <Body>Show energy insights, including real-time power consumption and cost-saving tips, along with predictive usage trends based on time of day</Body>
                                <ExLink src={newEneryLink}/>
                            </TextWrapper>
                        </Left>
                        <Right src={devices1}/>
                    </InsideWrapper>
                </Card>
                <PaginationWrapper>
                    <Paginator src={twodot}/>
                </PaginationWrapper>
            </CardWrapper>
            <CardWrapper>
                <Card>
                   <InsideWrapper2>
                        <Left2>
                            <Title2>Home Automation Kit</Title2>
                            <Body2>Display automation possibilities for lighting, climate, and appliance scheduling, all optimized for energy and efficiency.</Body2>
                            <ExLink2 src={seeSmartLink}/>
                        </Left2>
                        <RightWrapper>
                            <Right2 src={devices2}/>    
                        </RightWrapper>
                    </InsideWrapper2>
                </Card>
                <PaginationWrapper>
                    <Paginator src={twodot}/>
                </PaginationWrapper>
            </CardWrapper>
            <CardWrapper>
                <Card>
                    <InsideWrapper3>
                        <Left3>
                            <Title3>Security & Safety</Title3>
                            <Body3>Showcase features like Geo-Fencing to adjust settings when users leave or enter the home, and Event-Based Automation based on local alerts (e.g., adjusting for extreme weather).</Body3>
                            <ExLink3 src={viewSecurityLink}/>
                        </Left3>
                        <RightWrapper3>
                            <Right3 src={devices3}/>
                        </RightWrapper3>

                    </InsideWrapper3>

                </Card>
                <PaginationWrapper>
                    <Paginator src={twodot}/>
                </PaginationWrapper>
            </CardWrapper>

        </Container>
    )

}

export default ElevenWrapper;
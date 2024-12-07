import styled from "styled-components";
import leftTopImage from "../../images/leftTopImage.svg"
import righttop from "../../images/righttopimage.svg"
import leftTopOverLay from "../../images/leftTopOverLay.svg"
import rightTopOverLay from "../../images/rightTopOverLay.svg"
import middleLeftImage from "../../images/middleLeftImage.svg"
import middleLeftOverLay from "../../images/middleLeftOverLay.svg"
import middleRightOverLay from "../../images/middleRightOverLay.svg"
import middleRightImage from "../../images/middleRightImage.svg"
import bottomOneImage from "../../images/bottomOneImage.svg"
import bottomOneOverLay from "../../images/bottomOneOverLay.svg"









const Container = styled.div`
    width: 1188px;
    height: 1352px;
    margin-top: 18px;
    display: flex;
    flex-direction: column;
    gap: 28px;
`

const TwoCards = styled.div`
    width: 1188px;
    height: 432px;
    display: flex;
    gap: 28px;
`
const OneCard = styled.div`
    width: 1188px;
    height: 432px;
    background-image: url(${(props) => props.src});

`

const Card = styled.div`
    width: 579px;
    height: 432px;
    background-image: url(${(props) => props.src});
    display: flex;
    align-items: center;
    justify-content: center;

`

const ImageOverLay = styled.img`
    width: 579px;
    height: 432px;
`

const OneCardImage = styled.img`
    width: 1188px;
    height: 432px;
`


const SixteenWrapper = () => {
    return (
        <Container>
            <TwoCards>
                <Card src={leftTopImage}>
                    <ImageOverLay src={leftTopOverLay}/>
                </Card>
                <Card src={righttop}>
                    <ImageOverLay src={rightTopOverLay}/>
                </Card>
            </TwoCards>
            <TwoCards>
                <Card src={middleLeftImage}>
                    <ImageOverLay src={middleLeftOverLay}/>
                </Card>
                <Card src={middleRightImage}>
                    <ImageOverLay src={middleRightOverLay}/>
                </Card>
            </TwoCards>
            <OneCard src={bottomOneImage}>
                <OneCardImage src={bottomOneOverLay}/>
            </OneCard>
        </Container>
    )

}

export default SixteenWrapper;
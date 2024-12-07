import styled from "styled-components";
import features from "../../images/features.svg"
import featureapps from "../../images/featureapps.svg"



const Container = styled.div`
    width: 1227px;
    height: 580px;
`

const Left = styled.img`
    width: 576.94px;
    height: 564,29px;
`

const Right = styled.img`
    width: 588px;
    height: 567px;
`

const Bottom = () => {

    return(
        <Container>
            <Left src={features}/>
            <Right src={featureapps}/>

        </Container>
    )

}

export default Bottom;
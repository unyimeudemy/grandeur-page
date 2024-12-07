import styled from "styled-components";
import advancedflow from "../../images/advanceflow.svg"


const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;

`

const Heading = styled.div`
    width: 589px;
    height: 55px;
    font-family: Helvetica;
    font-weight: bold;
    font-size: 40px;
    color: #5C755E;

`

const FlowImage = styled.img`
    width: 1207px;
    height: 1202px;
    margin-top: 27px;
`

const TenWrapper = () => {

    return (
        <Container>
            <Heading>Advanced Flow Creation</Heading>
            <FlowImage src={advancedflow}/>
        </Container>
    )
}

export default TenWrapper;
import styled from "styled-components";


const Container = styled.div`
    display: flex;
    justify-content: center;
`

const Wrapper = styled.div`
    width: 522px;
    height: 111px;
`

const Heading = styled.div`
    width: 522px;
    height: 42px;
    font-family: Helvetica;
    font-weight: bold;
    font-size: 36px;
    color: #212121;
`

const Text = styled.div`
    width: 521px;
    height: 41px;
    font-family: Roboto;
    font-weight: medium;
    font-size: 16px;
    color: #212121;
`

const Top = () => {

    return(
        <Container>
            <Wrapper>
                <Heading>One App, Multiple Integrations</Heading>
                <Text>At Smart Grandeur, we are proud to partner with industry-leading sponsors who share our vision of innovation, excellence, and progress.</Text>
            </Wrapper>
        </Container>
    )

}

export default Top;
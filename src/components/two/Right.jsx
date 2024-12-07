import styled from "styled-components";
import dm from "../../images/botdirectmessage.svg"

const Container = styled.div`
    width: 640px;
    height: 658px;
    display: flex;
    margin-left: 23px;
    flex-direction: column;
`

const Wrapper = styled.img`
    width: 557px;
    height: 472px;
    margin-top: auto;

`


const Right = () => {
    return (
        <Container>
            <Wrapper src={dm}/>
        </Container>
    )
}

export default Right;
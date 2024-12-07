import styled from "styled-components";
import coro1 from "../../images/coro1.svg"
import coro2 from "../../images/coro2.svg"
import coro3 from "../../images/coro3.svg"
import coro4 from "../../images/coro4.svg"
import coro5 from "../../images/coro5.svg"
import coro6 from "../../images/coro6.svg"
import coro7 from "../../images/coro7.svg"
import coro8 from "../../images/coro8.svg"
import coro9 from "../../images/coro1.svg"

import React, { Component } from "react";

const images = [coro1, coro2, coro3, coro4, coro5, coro6, coro7, coro8, coro9]

const Container = styled.div`
  position: relative;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`

const CarouselContainer = styled.div`
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  -ms-overflow-style: none;
 
  &::-webkit-scrollbar {
    display: none;
  }
`


const CoroItem = styled.img`
   flex: 0 0 auto;
  width: 154px;
  height: 160px;
  scroll-snap-align: start;
  `


const ImageCarousel = () => {

    return (
        <Container>
            <CarouselContainer>
            {
                images.map((item) => (
                <CoroItem src={item}/>
            ))}
            </CarouselContainer>
        </Container>
    )

}

export default ImageCarousel;


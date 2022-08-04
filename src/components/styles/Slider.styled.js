import styled from "styled-components";

export const SliderContainer = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
`;

export const SliderArrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: transparent;
  color: black;
  border-radius: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "1.25rem"};
  right: ${(props) => props.direction === "right" && "1.25rem"};
  margin: auto;
  cursor: pointer;
  z-index: 2;
`;

export const SliderWrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

export const HeroSlide = styled.div`
  width: 100vw;
  height: 100%;
  position: relative;
  background-color: #${(props) => props.bg};
`;

export const SlideImgContainer = styled.div`
  height: 100%;
`;

export const SlideImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

export const SlideInfoContainer = styled.div`
  width: 100%;
  max-width: 800px;
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 1rem;
`;

export const Title = styled.h1`
  font-size: 70px;
`;

export const Desc = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`;

export const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
`;
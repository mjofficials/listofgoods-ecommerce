import WestIcon from "@mui/icons-material/West";
import EastIcon from "@mui/icons-material/East";
import React, { useState } from "react";
import { sliderItems } from "../data";
import { CardDesc, CardTitle } from "./styles/Common.styled";
import {
  SliderArrow,
  SliderContainer,
  SlideImage,
  SlideImgContainer,
  SlideInfoContainer,
  HeroSlide,
  SliderWrapper,
} from "./styles/Slider.styled";

export const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };
  return (
    <SliderContainer>
      <SliderArrow direction="left" onClick={() => handleClick("left")}>
        <WestIcon sx={{ fontSize: "4rem" }} />
      </SliderArrow>

      <SliderWrapper slideIndex={slideIndex}>
        {sliderItems.map((item) => (
          <HeroSlide bg={item.bg} key={item.id}>
            <SlideImgContainer>
              <SlideImage src={item.img} />
            </SlideImgContainer>
            <SlideInfoContainer>
              <CardTitle>{item.title}</CardTitle>
              <CardDesc>{item.desc}</CardDesc>
            </SlideInfoContainer>
          </HeroSlide>
        ))}
      </SliderWrapper>

      <SliderArrow direction="right" onClick={() => handleClick("right")}>
        <EastIcon sx={{ fontSize: "4rem" }} />
      </SliderArrow>
    </SliderContainer>
  );
};

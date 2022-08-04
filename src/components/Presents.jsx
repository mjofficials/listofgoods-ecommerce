import React from "react";
import { HeadingBold, HeadingNormal, NavNum } from "./styles/Common.styled";
import {
  HeadingNum,
  HeadingNumContainer,
  PresentsSection,
  SquareBox,
  SquareBoxContainer,
  SquareBoxLg,
  SquareBoxMini,
} from "./styles/Presents.styled";
// import glassImg from "/assets/images/glass.jpg";

const Presents = () => {
  return (
    <PresentsSection>
      <HeadingNormal>There's Two way to find presents</HeadingNormal>

      <HeadingNumContainer>
        <HeadingNum>
          <NavNum>1</NavNum>
        </HeadingNum>
        <HeadingNum>
          <NavNum>2</NavNum>
        </HeadingNum>
      </HeadingNumContainer>

      <SquareBoxContainer>
        <SquareBoxLg>
          <a href="#0" className="hover_link" aria-label="hover link">
            <HeadingBold>Present Finder</HeadingBold>
          </a>
          <img src="/assets/images/tea_glass.jpg" alt="tea_glass" />
          <span className="overlay">
            <HeadingBold>Present Finder</HeadingBold>
          </span>
        </SquareBoxLg>

        <SquareBox>
          <SquareBoxMini className="yellow">
            <a href="#0" className="hover_link" aria-label="hover link">
              <HeadingBold>Shop</HeadingBold>
            </a>
            <img src="/assets/images/mug.jpg" alt="mug" />
            <span className="overlay">
              <HeadingBold>Shop</HeadingBold>
            </span>
          </SquareBoxMini>

          <SquareBoxMini className="blue">
            <a href="#0" className="hover_link" aria-label="hover link">
              <HeadingBold>The</HeadingBold>
            </a>
            <img src="/assets/images/knife.jpg" alt="knife" />
            <span className="overlay">
              <HeadingBold>The</HeadingBold>
            </span>
          </SquareBoxMini>

          <SquareBoxMini className="gray">
            <a href="#0" className="hover_link" aria-label="hover link">
              <HeadingBold>Full</HeadingBold>
            </a>
            <img src="/assets/images/dog.jpg" alt="dog" />
            <span className="overlay">
              <HeadingBold>Full</HeadingBold>
            </span>
          </SquareBoxMini>

          <SquareBoxMini className="pink">
            <a href="#0" className="hover_link" aria-label="hover link">
              <HeadingBold>List</HeadingBold>
            </a>
            <img src="/assets/images/bicycle.jpg" alt="bicycle" />
            <span className="overlay">
              <HeadingBold>List</HeadingBold>
            </span>
          </SquareBoxMini>
        </SquareBox>
      </SquareBoxContainer>
    </PresentsSection>
  );
};

export default Presents;

import React from "react";
import { CardDesc, CardTitle, HeadingBold } from "./styles/Common.styled";
import {
  TaglineContent,
  TaglineSectionContainer,
} from "./styles/TaglineSection.styled";

export const TagLineSection = () => {
  return (
    <TaglineSectionContainer>
      <TaglineContent>
        <CardTitle>Gift giving for people who give a damn</CardTitle>
        <HeadingBold>
          Finding the perfect gift is difficult and time consuming, so we fixed
          it.
        </HeadingBold>
        <CardDesc>
          An Expertly curated and beautiful, best-in-class <br /> product across
          a wide range of interest.
        </CardDesc>
        <CardDesc>
          We'll wrap it. We'll send it. We'll guarantee they love it. <br />
          Simply select from the suggestions and we'll do the rest.
        </CardDesc>
      </TaglineContent>
    </TaglineSectionContainer>
  );
};

import React from "react";
import { Fragment } from "react";
import { ImageBase } from "@/types/Imagetypes";
import { Figcaption, Figur, ImageContainer, MainText, StyledImage } from "@/styles/commonStyledComp";

export const enhanceHtml = (html: string, myImages: Array<ImageBase>) => {
  return html
    .split('\n\n')
    .map((text: string, index: number) => {
      const imageInLine = myImages[index / 4];
      const key = `${text}${index}`;
      return (index % 4 === 0) && (imageInLine !== undefined) && (index > 1)
        ? (
          <Fragment
            key={key}
          >
            <MainText>{text}</MainText>
            <Figur>
              <ImageContainer>
                <StyledImage
                  data-index={index}
                  src={imageInLine.url}
                  alt={imageInLine.altText.desc}
                />
              </ImageContainer>
              <Figcaption>
                {imageInLine.altText.caption || imageInLine.altText.desc}
              </Figcaption>
            </Figur>
          </Fragment>)
        : (
          <MainText
            key={key}
          >
            {text}
          </MainText>
        )
    });
};

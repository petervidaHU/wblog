import React from "react";
import { Fragment } from "react";
import { ImageBase } from "@/types/Imagetypes";

export const enhanceHtml = (html: string, myImages: Array<ImageBase>) => {
  return html
  .split('\n\n')
  .map((text: string, index: number) => {
    const imageInLine = myImages[index / 4];
    const key = `${text}${index}`;
    return (index % 4 === 0) && (imageInLine !== undefined)
      ? (
        <Fragment
          key={key}
        >
          <div>{text}</div>
          <figure>
            <img
              height="300"
              data-index={index}
              src={imageInLine.url}
              alt={imageInLine.altText.desc}
            />
            <figcaption>
              {imageInLine.altText.caption || imageInLine.altText.desc}
            </figcaption>
          </figure>
        </Fragment>)
      : (
        <div
          key={key}
        >
          {text}
        </div>
      )
  });
};
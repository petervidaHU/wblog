import { Fragment } from "react";
import React from "react";
import { ImageBase } from "@/types/Imagetypes";

export const enhanceHtml = (html: string, myImages: Array<ImageBase>) => html
  .split('</p>\n<p>')
  .map((text: string) => text.replace(/<p>|<\/p>|<h1>.*?<\/h1>/g, ''))
  .map((text: string, index: number) => {
    const imageInLine = myImages[index / 4];
    return (index % 4 === 0) && (imageInLine !== undefined)
      ? (
        <Fragment
          key={`${text}${index}`}
        >
          <div>{text}</div>
          <figure>
            <img
              data-index={index}
              src={imageInLine.url}
              alt={imageInLine.altText.desc}
            />
            <figcaption>
              {imageInLine.altText.desc}
            </figcaption>
          </figure>
        </Fragment>)
      : (
        <div
          key={`${text}${index}`}
        >
          {text}
        </div>
      )
  });
import { ImageBase } from "@/types/Imagetypes";

export const getCaption = (image: ImageBase) => image.altText.caption || image.altText.desc || image.url;

export const getDesc = (image: ImageBase) => image.altText.desc || image.altText.caption || image.url;
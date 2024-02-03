import { ImageBase } from "./Imagetypes";

export enum TypeOfEntity {
    city = 'city',
    poi = 'poi',
};

export type CoordinatesType = [number, number];

export interface Frontmatter {
    country: string,
    type: TypeOfEntity,
    id: string,
    name: string,
    population: number,
    coordinates: CoordinatesType,
    county: string,
    slug: string,
    excerpt?: string,
    poiList?: Array<string>
};

export interface SubContent {
    data: Frontmatter,
    content: string,
    images: Array<ImageBase>,
}

export interface DynamicProps {
    data: Frontmatter,
    ownContent: string,
    ownImages: Array<ImageBase>,
    subContent: Array<SubContent>
  }
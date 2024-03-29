export interface ImageBase {
    url: string,
    altText: {
        caption: string,
        desc: string,
    },
    key: string,
    dimension: {
        width: number,
        height: number,
    }
}
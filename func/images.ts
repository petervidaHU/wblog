import path from "node:path";
import ExifReader from 'exifreader';

const getImageExif = async (img: string, dirPath: string) => {
    try {
        const tags: any = await ExifReader.load(`${dirPath}/${img}`);

        return {
            desc: tags['ImageDescription']?.value[0],
            caption: tags['Caption/Abstract']?.value.map((byte: number) => String.fromCharCode(byte)).join(''),
            width: tags?.['Image Width']?.value,
            height: tags?.['Image Height']?.value,
        };
    } catch (error) {
        throw new Error('Error loading image EXIF data: ' + error);
    }
};

export const filterImages = (folder: Array<string>) => {
    if (!folder) {
        throw new Error('Folder is null or undefined');
    }

    return folder.filter((file) => {
        const ext = path.extname(file).toLowerCase();
        return ['.jpg', '.jpeg', '.png', '.gif'].includes(ext);
    });
};

export const imageObjectBuilder = async (img: string, slug: string, imagePath: string) => {
    const { desc = null, caption = null, width = 0, height = 0} = await getImageExif(img, imagePath);

    return {
        url: `/dataSource/${slug}/${img}`,
        key: `key${imagePath}/${slug}/${img}`,
        altText: {
            desc,
            caption,
        },
        dimension: {
            width,
            height,
        }
    }
}

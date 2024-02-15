import { Masonry } from '@mui/lab';
import React, { FC } from 'react'
import { Button } from '@mui/material';
import { MyModal } from './modal/MyModal';
import Image from 'next/image';
import { ImageBase } from '../types/Imagetypes';
import { getCaption, getDesc } from '@/func/getCaption';
import { Figcaption } from '@/styles/commonStyledComp';

const DEFAULT_COLUMN = 3;
const DEFAULT_SPACING = 1;

interface PicGaleryProps {
  images: Array<ImageBase>;
  column?: number;
  spacing?: number;
}

const PicGalery: FC<PicGaleryProps> = ({
  images,
  column = DEFAULT_COLUMN,
  spacing = DEFAULT_SPACING,
}) => {
  const [open, setOpen] = React.useState(false);
  const [imageInModal, setImageInModal] = React.useState<number>(0);

  const handleOpen = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLDivElement;
    if (!target.dataset.index) return;
    const ind = +target.dataset.index;

    setOpen(true)
    setImageInModal(ind)
  };

  const handleSwitchModalIndex = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.target as HTMLButtonElement;
    if (!target.dataset) return;
    const { index = 0, length = 0, direction } = target.dataset;
    const i = +index;
    const l = +length

    let newIndex: number;

    if (direction === 'DEC') {
      newIndex = i === 0 ? l - 1 : i - 1;
    } else {
      newIndex = i === l - 1 ? 0 : i + 1;
    }

    setImageInModal(newIndex)
  }

  return (
    <>
      <Masonry
        columns={column}
        spacing={spacing}
      >
        {images.map(({ altText, url, key }, index) => (
          <div
            key={key || index}
            onClick={handleOpen}
          >
            <img
              data-index={index}
              key={url || index}
              src={url}
              width='300'
              height='300'
              alt={altText.caption || altText.desc}
            />
          </div>
        )
        )}
      </Masonry>

      <MyModal
        isOpen={open}
        opener={setOpen}
      >
        <Button
          data-index={imageInModal}
          data-direction={'DEC'}
          data-length={images.length}
          onClick={handleSwitchModalIndex}
        >
          left
        </Button>
        <figure>
          <img
            src={images[imageInModal].url}
            width='300'
            height='300'
            alt={getDesc(images[imageInModal])}
          />
          <Figcaption>
            {getCaption(images[imageInModal])}
          </Figcaption>
        </figure>
        <Button
          data-index={imageInModal}
          data-direction={'INC'}
          data-length={images.length}
          onClick={handleSwitchModalIndex}
        >
          right
        </Button>
      </MyModal>
    </>
  )
}

export default PicGalery

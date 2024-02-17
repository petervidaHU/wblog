import React, { FC } from 'react'
import Image from 'next/image';
import { ImageBase } from '../types/Imagetypes';
import { Masonry } from '@mui/lab';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeftRounded';
import ChevronRighttIcon from '@mui/icons-material/ChevronRightRounded';
import { IconButton, styled } from '@mui/material';
import { MyModal } from './modal/MyModal';
import { getCaption, getDesc } from '@/func/getCaption';
import { Figcaption } from '@/styles/commonStyledComp';
import { theme } from '@/styles/theme';

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
        {images.map(({ altText, url, key, dimension }, index) => (
          <Image
            key={key || index}
            onClick={handleOpen}
            style={{ 
              borderRadius: theme.shape.borderRadius,
              cursor: 'pointer',
             }}
            width={300}
            height={dimension.height / dimension.width * 300}
            data-index={index}
            src={url}
            alt={altText.caption || altText.desc}
          />
        )
        )}
      </Masonry>

      <MyModal
        isOpen={open}
        opener={setOpen}
      >
        <ImageContainer>
          <IconButton
            className="left"
            onClick={handleSwitchModalIndex}
          >
            <ChevronLeftIcon
              data-index={imageInModal}
              data-direction={'DEC'}
              data-length={images.length}
            />
          </IconButton>
          <figure>
            <Image
              style={{ borderRadius: theme.shape.borderRadius }}
              width={1000}
              height={images[imageInModal].dimension.height / images[imageInModal].dimension.width * 1000}
              src={images[imageInModal].url}
              alt={getDesc(images[imageInModal])}
            />
            <Figcaption>
              {getCaption(images[imageInModal])}
            </Figcaption>
          </figure>
          <IconButton
            className="right"
            onClick={handleSwitchModalIndex}
          >
            <ChevronRighttIcon
              data-index={imageInModal}
              data-direction={'INC'}
              data-length={images.length}
            />
          </IconButton>
        </ImageContainer>
      </MyModal>
    </>
  )
}

export default PicGalery

const ImageContainer = styled('div')({
  borderRadius: theme.shape.borderRadius,
  position: 'relative',

  '& button': {
    padding: '.4rem',
    marginInline: '.5rem',
    borderRadius: '50%',
    position: 'absolute',
    top: '50%',
    opacity: 0,
    transition: 'opacity .3s ease',
  },
  '& button.right': {
    right: 0,
  },
  '&:hover button': {
    backgroundColor: 'rgba(0, 0, 0, .5)',
    color: '#fff',
    opacity: '.8',
  },
  '& figcaption': {
    padding: '.4rem',
    margin: '1rem',
    borderRadius: '10px',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    opacity: 0,
    transition: 'opacity .3s ease',
    color: '#fff',
  },
  '&:hover figcaption': {
    backgroundColor: 'rgba(0, 0, 0, .9)',
    opacity: '.8',
  },
})

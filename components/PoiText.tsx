import React, { FC, useState } from 'react';
import { SubContent } from '@/types/DataSource'
import Link from 'next/link';
import { Box, Typography, Button } from '@mui/material';
import { getCaption } from '@/func/getCaption';
import { Figur, ImageContainer, StyledImage, Figcaption, MainText } from '@/styles/commonStyledComp';

interface Props {
  poi: SubContent,
  baseSlug: string,
}

const TRUNCATED_LENGTH = 400;

const PoiText: FC<Props> = ({ poi: { data, content, images }, baseSlug }) => {
  const [expanded, setExpanded] = useState(false);
  const { name, slug, id, importance = 4 } = data;

  const truncatedText = content.length > TRUNCATED_LENGTH ?
    `${content.slice(0, TRUNCATED_LENGTH)}...`
    : content;

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const im = images[0] || null

  return (
    <Box>
      {im && im.url && (
        <Figur>
          <ImageContainer>
            <StyledImage
              src={im.url}
              alt={getCaption(im)}
            />
          </ImageContainer>
          <Figcaption>
            {getCaption(im)}
          </Figcaption>
        </Figur>
      )}
      
      <Typography variant="h5" gutterBottom>
        {importance <= 2 ? (
          <Link href={`${baseSlug}/${slug}`} passHref>
            {name}
          </Link>
        ) : (
          name
        )}
      </Typography>

      <MainText>
        {expanded ? content : truncatedText}
      </MainText>

      {content.length > 300 && (
        <Button color="primary" onClick={handleExpandClick}>
          {expanded ? 'See less' : 'See more'}
        </Button>
      )}
    </Box >
  );
}

export default PoiText

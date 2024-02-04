import React, { FC, useState } from 'react';
import { SubContent } from '@/types/DataSource'
import Link from 'next/link';
import { Box, Typography, Button } from '@mui/material';
import { getCaption } from '@/func/getCaption';

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

  return (
    <Box>
      {images[0] && images[0].url && <img src={images[0].url} alt={getCaption(images[0])} style={{ maxWidth: '100%' }} />}

      <Typography variant="h5" gutterBottom>
        {importance <= 2 ? (
          <Link href={`${baseSlug}/${slug}`} passHref>
            {name}
          </Link>
        ) : (
          name
        )}
      </Typography>

      <Typography variant="body2" color="textSecondary" paragraph>
        {expanded ? content : truncatedText}
        {content.length > 300 && (
          <Button color="primary" onClick={handleExpandClick}>
            {expanded ? 'See less' : 'See more'}
          </Button>
        )}
      </Typography>
    </Box>
  );
}

export default PoiText

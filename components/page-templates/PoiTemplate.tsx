import React, { FC } from 'react'
import Image from 'next/image';
import { DynamicProps } from '@/types/DataSource';
import Button from '@mui/material/Button';
import { useVisitedSites } from '@/hooks/useVisitedSites';
import { useRouter } from 'next/router';
import { useBreadcrumb } from '@/hooks/useBreadcrumbs';
import Box from '@mui/material/Box';

const PoiTemplate: FC<Omit<DynamicProps, 'subContent'>> = ({
  data, ownContent, ownImages,
}) => {
  const router = useRouter();
  const currentUrl = router.asPath;

  const Breadcrumbs = useBreadcrumb(currentUrl);
  useVisitedSites({ url: currentUrl })

  // console.log('oi poi', ownImages)
  // console.log('oi poi', data)
  // console.log('oi poi', ownContent)

  return (
    <Box
      sx={{
        mt: 4
      }}
    >
      {Breadcrumbs}
      <Button color="primary">
        Bordered
      </Button>
      <Button color="primary">
        Light
      </Button>
      <Button color="primary">
        Flat
      </Button>
      <div>{data.name}</div>
      <div>{ownContent}</div>
      {ownImages[0] && (
        <Image src={ownImages[0].url} alt={ownImages[0].altText.desc} width={300} height={300} />
      )}

    </Box>
  )
}

export default PoiTemplate;

/*
        <Image src={subContent[0].images[0].url} alt="sss" width={300} height={300} />
*/

import React, { FC } from 'react'
import Image from 'next/image';
import { DynamicProps } from '@/types/DataSource';
import Button from '@mui/material/Button';
import { useVisitedSites } from '@/hooks/useVisitedSites';
import { useRouter } from 'next/router';

const PoiTemplate: FC<Omit<DynamicProps, 'subContent'>> = ({
  data, ownContent, ownImages,
}) => {
  const router = useRouter();
  const currentUrl = router.asPath;

  useVisitedSites({url: currentUrl})
  
  console.log('oi poi', ownImages)
  console.log('oi poi', data)
  console.log('oi poi', ownContent)
  
  return (
    <>
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

    </>
  )
}

export default PoiTemplate;

/*
        <Image src={subContent[0].images[0].url} alt="sss" width={300} height={300} />
*/

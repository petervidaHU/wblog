import React, { FC } from 'react'
import dynamic from 'next/dynamic';

interface Props {
  width: number;
  height: number; 
  children: any,
  center: Array<number>,
  zoom: number,
}

const DynamicMap = dynamic(() => import('./DynamicMap'), {
  ssr: false
});

// Set default sizing to control aspect ratio which will scale responsively
// but also help avoid layout shift

const DEFAULT_WIDTH = 600;
const DEFAULT_HEIGHT = 600;

const MapComponent: FC<Props> = (props) => {
  const { width = DEFAULT_WIDTH, height = DEFAULT_HEIGHT} = props;
  return (
    <div style={{ aspectRatio: width / height }}>
      <DynamicMap {...props} />
    </div>
  )
}

export default MapComponent;
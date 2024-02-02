import { FC, useEffect } from 'react';
import Leaflet from 'leaflet';
import * as ReactLeaflet from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

interface Props {
  width: number,
  height: number,
  children: any,
}

const { MapContainer } = ReactLeaflet;

const Map: FC<Props> = ({ children, width, height, ...rest }) => {
  console.log('rest ', rest)

  useEffect(() => {
    (async function init() {
      delete (Leaflet.Icon.Default.prototype as any)._getIconUrl;
      Leaflet.Icon.Default.mergeOptions({
        iconRetinaUrl: 'leaflet/images/marker-icon-2x.png',
        iconUrl: 'leaflet/images/marker-icon.png',
        shadowUrl: 'leaflet/images/marker-shadow.png',
      });
    })();
  }, []);

  return (
    <MapContainer style={ {
      width,
      height,
    }} {...rest}>
      {children(ReactLeaflet, Leaflet)}
    </MapContainer>
  )
}

export default Map;

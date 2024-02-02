import { FC, useEffect } from 'react';
import Leaflet from 'leaflet';
import {MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

interface Props {
  width: number,
  height: number,
  center: Array<number>,
  zoom: number,
}

const Map: FC<Props> = ({ width, height, center, zoom }) => {

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

  const c = {lat: center[0], lng: center[1]}

  return (
    <MapContainer style={{
      width,
      height,
    }}
      center={c}
      zoom={zoom}>
      <>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
        />
        <Marker position={c}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </>
    </MapContainer>
  )
}

export default Map;

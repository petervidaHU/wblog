import { FC, useEffect } from 'react';
import Leaflet from 'leaflet';
import {MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { MarkersType } from '@/types/UITypes';
import { CoordinatesType } from '@/types/DataSource';

interface Props {
  width: number | string,
  height: number,
  center: CoordinatesType,
  zoom: number,
  markers: MarkersType,
}

const Map: FC<Props> = ({ width, height, center, zoom, markers }) => {

   useEffect(() => {
    (async function init() {
      delete (Leaflet.Icon.Default.prototype as any)._getIconUrl;
      Leaflet.Icon.Default.mergeOptions({
        iconRetinaUrl: '/leaflet/images/marker-icon-2x.png',
        iconUrl: '/leaflet/images/marker-icon.png',
        shadowUrl: '/leaflet/images/marker-shadow.png',
      });
    })();
  }, []); 

  const c = {lat: center[0], lng: center[1]}

  const markersComp = markers.map(({center, slug, name}) => (
    <Marker position={{lat: center[0], lng: center[1]}} key={slug}>
    <Popup>
      {name}
    </Popup>
  </Marker>
  ))

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
      {markersComp}
      </>
    </MapContainer>
  )
}

export default Map;

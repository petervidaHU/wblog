import React from 'react'
import MapComponent from '@/components/Map/Map'

const DEFAULT_CENTER = [38.907132, -77.036546]

const ttt = () => {
    return (
        <div>
            <MapComponent width={800} height={400} center={DEFAULT_CENTER} zoom={12}>
                {({ TileLayer, Marker, Popup }: { TileLayer: any, Marker: any, Popup: any }) => (
                    <>
                        <TileLayer
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                        />
                        <Marker position={DEFAULT_CENTER}>
                            <Popup>
                                A pretty CSS3 popup. <br /> Easily customizable.
                            </Popup>
                        </Marker>
                    </>
                )}
            </MapComponent>
        </div>
    )
}

export default ttt
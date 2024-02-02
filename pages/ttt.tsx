import React from 'react'
import MapComponent from '@/components/Map/Map'

const DEFAULT_CENTER = [38.907132, -77.036546]

const ttt = () => {
    return (
        <div>
            <MapComponent width={800} height={400} center={DEFAULT_CENTER} zoom={12} />
        </div>
    )
}

export default ttt
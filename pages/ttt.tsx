import React, { FC } from 'react'
import MapComponent from '@/components/Map/Map'
import Title from '@/components/page-templates/Title'

const DEFAULT_CENTER = [38.907132, -77.036546]

interface Props {
    data: any
}

const ttt: FC<Props> = ({ data }) => {
   // const { title } = data;

    return (
        <>
            <Title title={'title'} />
            <div>
                <MapComponent width={800} height={2400} center={DEFAULT_CENTER} zoom={12} />
            </div>
        </>
    )
}

export default ttt
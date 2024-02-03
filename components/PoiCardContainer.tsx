import React, { FC } from 'react'
import { SubContent } from '@/types/DataSource'
import Title from './page-templates/Title'
import PoiCard from './PoiCard'

interface Props {
    pois: Array<SubContent>,
    title: string,
    desc?: string,
}

const PoiCardContainer: FC<Props> = ({ pois, title, desc }) => {
    return (<>
        <Title title={title} variant="h4" />
        {pois.map(poi => {
            return (<PoiCard
                poi={poi}
            />)
        })}
    </>
    )
}

export default PoiCardContainer
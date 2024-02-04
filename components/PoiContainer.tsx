import React, { FC } from 'react'
import { SubContent } from '@/types/DataSource'
import Title from './page-templates/Title'
import PoiText from './PoiText'

interface Props {
    pois: Array<SubContent>,
    title: string,
    desc?: string,
    baseSlug: string,
}

const PoiContainer: FC<Props> = ({ pois, title, desc, baseSlug }) => {
    const orderedPois = pois.sort((a, b) => ((a.data.importance || 10) - (b.data.importance || 10)));

    return (<>
        <Title title={title} variant="h4" />
        {orderedPois.map(poi => (
            <PoiText
                key={poi.data.id}
                poi={poi}
                baseSlug={baseSlug}
            />
        )
        )}
    </>
    )
}

export default PoiContainer
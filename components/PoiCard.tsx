import { SubContent } from '@/types/DataSource'
import React, { FC } from 'react'

interface Props {
    poi: SubContent,
}

const PoiCard: FC<Props> = ({ poi: { data, content, images} }) => {
    const { name, slug} = data;
  return (<>
    <div>{name}</div>
    <div>{slug}</div>
  </>
  )
}

export default PoiCard
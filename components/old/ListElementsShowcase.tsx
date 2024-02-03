import React, { FC } from 'react'
import { breadcrumbObjectT, listElementsPopulatedT } from '../types/entitiesT'
import { getMyImages } from '../utils/getImages';
import { Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';

interface ListListElementsShowcaseProps {
  list: Array<listElementsPopulatedT>,
  bcOverride: breadcrumbObjectT,
}

const ListElementsShowcase: FC<ListListElementsShowcaseProps> = ({
  list,
  bcOverride,
}) => {
  const listElements = list.map(listElement => {
    const { name, fullSlug, id, excerpt, avatar } = listElement;
    const myImages = getMyImages(avatar, 3);

    return (
      <div key={id}>
        <Link
          to={fullSlug}
          state={{
            prevPath: bcOverride,
          }}
        >
          {name}
        </Link>
        {myImages
          && myImages.map(({ description, imageData, key }) => {
            return (
              <GatsbyImage
                style={{ width: '200px', height: '200px' }}
                key={key}
                image={imageData}
                alt={description}
              />
            )
          })}
        <div>{excerpt}</div>
      </div>
    )
  })

  return (
    <>
      <div>ListElementsShowcase</div>
      {listElements}
      <div></div>
    </>
  )
}

export default ListElementsShowcase
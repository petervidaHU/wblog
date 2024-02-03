import styled from '@emotion/styled';
import React from 'react'
import Carousel from 'react-material-ui-carousel'
import { GatsbyImage, ImageDataLike, getImage } from "gatsby-plugin-image"
import { Link } from 'gatsby';

interface ListsContainerProps {
  lists: Array<any>
}

function groupArrayItems<T>(arr: Array<T>, groupSize: number): Array<Array<T>> {
  const groupedArray: Array<Array<T>> = [];
  for (let i = 0; i < arr.length; i += groupSize) {
    groupedArray.push(arr.slice(i, i + groupSize));
  }
  return groupedArray;
}

function getAvatarImage({edges}) {
  const avatarImageIndex = edges.findIndex((edge: any) => edge.node?.name.slice(0, 3) === 'a__');
  return edges[avatarImageIndex || 0]?.node?.childrenImageSharp[0]?.gatsbyImageData;
}

const ListsContainer: React.FC<ListsContainerProps> = ({ lists }) => {
  const arrangedLists = lists.map(oneList => ({ onRow: groupArrayItems(oneList.frontmatter.listElementsPopulated, 3), ...oneList }))

  return (
    <>
      <div>ListsContainer</div>
      {arrangedLists.map(({ frontmatter: { name, fullSlug }, onRow }) => (
        <div key={name}>
          <Link to={fullSlug}>{name}</Link>
          <Carousel
            autoPlay={true}
            stopAutoPlayOnHover={true}
            animation={'slide'}
            navButtonsAlwaysInvisible={true}
            indicators={false}
            height={300}
          >
            {onRow.map((oneInRowEntity, i) => (
              <CarouselContainer
                key={oneInRowEntity[0]?.listElement?.frontmatter?.name || i}
              >
                {oneInRowEntity.map(({name, fullSlug, avatar}) => {
                  console.log('avatar', avatar)
                  const listElementPicSource: ImageDataLike = getAvatarImage(avatar);
                  const listElementPic = getImage(listElementPicSource);
                  return (
                    <Link to={fullSlug} key={name}>
                    <div>
                      <h3 >{name}</h3>
                      {listElementPic && (
                        <GatsbyImage
                          key={name}
                          image={listElementPic}
                          alt={name}
                          style={{ width: '100px', height: '100px' }}
                        />)}
                    </div>
                    </Link>
                  )
                })}
              </CarouselContainer>
            ))}
          </Carousel>
        </div>
      )
      )}
    </>
  )
}

export default ListsContainer

const CarouselContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

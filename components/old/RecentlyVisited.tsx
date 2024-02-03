import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../store/store'
import { GatsbyImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'
import { Button } from '@mui/material'
import { delHistory } from '../store/userJourneySlice'

const RecentlyVisited = () => {
  const dispatch = useDispatch()
  const visitedList = useSelector((state: any) => state.userJourney.visited)

  const clearHandler = () => {
    dispatch(delHistory())
  }

  return (
    <>
      <div>RecentlyVisited</div>
      {visitedList.map(({ name, fullSlug, avatar }) => (
        <div key={fullSlug}>
          <h3 >{name}</h3>
          {avatar && (
            <Link to={fullSlug}>
              <GatsbyImage
                role="link"
                image={avatar.imageData}
                alt={name}
                style={{ width: '100px', height: '100px' }}
              />
            </Link>
          )}
        </div>
      ))}
      <Button
        onClick={clearHandler}
      >
        clear history
      </Button>
    </>
  )
}

export default RecentlyVisited
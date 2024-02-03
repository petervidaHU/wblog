import { Link } from 'gatsby'
import React, { FC } from 'react'
import { searchIndexT } from '../templates/search'
import { breadCrumbT } from '../types/common'

interface searchListProps {
  list: searchIndexT,
  bcOverride?: breadCrumbT
}

const SearchList: FC<searchListProps> = ({
  list,
  bcOverride,
}) => {
  return (
    <div>
      <ul>
        {list.map(({ id, name, slug}) => (
          <li key={id}>
            <Link
              to={slug}
              state={{
                prevPath: [bcOverride],
              }}
            >
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SearchList
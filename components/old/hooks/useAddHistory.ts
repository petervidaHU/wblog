import { useEffect } from "react"
import { addNewHistory } from "../../store/userJourneySlice"
import { iEntity, listEntityT } from "../../types/entitiesT"
import { useDispatch } from "react-redux"
import { myImageT } from "../../types/imageTypes"

export const useAddHistory = (pageContext: Pick<iEntity['frontmatter'], 'name' | 'fullSlug' | 'id'>, avatar: myImageT) => {
    const { name, fullSlug, id } = pageContext
    const dispatch = useDispatch()
    useEffect(() => {
        const visitedEntity: listEntityT = {
          name,
          fullSlug,
          id,
          avatar,
        };

        dispatch(addNewHistory(visitedEntity));
    
      }, [pageContext])
    }

import { addVisitedSite } from "@/store/visitedSlice";
import { VisitedSite } from "@/types/reduxTypes";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

export const useVisitedSites = (visited: VisitedSite) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(addVisitedSite(visited));
    }, [dispatch, visited]);
};

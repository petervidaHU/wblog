import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from 'next/router';
import { ImageBase } from "@/types/Imagetypes";
import { MarkersType } from "@/types/UITypes";
import { SubContent } from "@/types/DataSource";
import { addVisitedSite } from "@/store/visitedSlice";
import { formatNumber } from "@/func/formatNumbers";
import { enhanceHtml } from "@/func/enhanceHtml";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import MapComponent from "../Map/MapComponent";
import PoiContainer from "../PoiContainer";
import PicGalery from "../picGalery";
import Title from "./Title";
import { useVisitedSites } from "@/hooks/useVisitedSites";

interface Props {
  data: any,
  ownContent: string,
  ownImages: Array<ImageBase>,
  subContent: Array<SubContent>
}

const CityTemplate: React.FC<Props> = ({ data, ownContent, ownImages, subContent }) => {
  const router = useRouter();
  const currentUrl = router.asPath;

  // console.log('pagecontext in city template:::::::::::::', data);
  // console.log('pagecontext in city template:::::::::::::', ownImages);
  // console.log('pagecontext in city template:::::::::::::', ownContent);

  const {
    coordinates, name, population, id, county, 
  } = data;

  useVisitedSites({url: currentUrl})

  const mainText = enhanceHtml(ownContent, ownImages);

  const markerPoints: MarkersType = subContent.map(content => ({
    center: content.data.coordinates,
    name: content.data.name,
    slug: content.data.slug,
  }));

  /*
  const finalBC = breadcrumbOverride(location, breadcrumbs);
*/
  return (
    <>

      <Title title={name} />

      <Box>
        <Typography variant="body1" component="div">
          Population: {formatNumber(population)}
        </Typography>
        <Typography variant="body1" component="div">
          county: {county}
        </Typography>
      </Box>

      <Typography
        variant="body1"
        component="div"
      >
        {mainText}
      </Typography>

      {subContent && subContent.length > 0 && (
        <PoiContainer
          title={`Point of interest in ${name}`}
          desc="description"
          pois={subContent}
          baseSlug={currentUrl}
        />
      )}

      <MapComponent width={600} height={600} center={coordinates} zoom={10} markers={markerPoints} />

      <PicGalery
        images={ownImages}
      />
    </>
  )

}

export default CityTemplate;


/*
 <>
      <GoBackButton />

      <ListsContainer lists={concernedLists} />


   
      
    </>
*/

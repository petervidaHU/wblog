import React from "react"
import { ImageBase } from "@/types/Imagetypes";
import { SubContent } from "@/types/DataSource";
import { formatNumber } from "@/func/formatNumbers";
import { enhanceHtml } from "@/func/enhanceHtml";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import MapComponent from "../Map/MapComponent";
import PoiCardContainer from "../PoiCardContainer";
import PicGalery from "../picGalery";
import Title from "./Title";

interface Props {
  data: any,
  ownContent: string,
  ownImages: Array<ImageBase>,
  subContent: Array<SubContent>
}

const CityTemplate: React.FC<Props> = ({ data, ownContent, ownImages, subContent }) => {
  console.log('pagecontext in city template:::::::::::::', subContent);
  // console.log('pagecontext in city template:::::::::::::', ownImages);
  // console.log('pagecontext in city template:::::::::::::', ownContent);
  const {
    coordinates, name, population, id, county
  } = data;
  
  const mainText = enhanceHtml(ownContent, ownImages);
  /*
  const finalBC = breadcrumbOverride(location, breadcrumbs);
  useAddHistory({ name, fullSlug, id }, myImages[0]);
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
        <>{mainText}</>
      </Typography>

      <PicGalery
        images={ownImages}
      />

      <MapComponent width={600} height={600} center={coordinates} zoom={10} />

      {subContent && subContent.length > 0 && (
        <PoiCardContainer
          title={`Point of interest in ${name}`}
          desc="description"
          pois={subContent}
        />
      )}
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

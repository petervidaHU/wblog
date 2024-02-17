import React, { CSSProperties } from "react";
import { useRouter } from 'next/router';
import { ImageBase } from "@/types/Imagetypes";
import { MarkersType } from "@/types/UITypes";
import { SubContent } from "@/types/DataSource";
import { formatNumber } from "@/func/formatNumbers";
import { enhanceHtml } from "@/func/enhanceHtml";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import MapComponent from "../Map/MapComponent";
import PoiContainer from "../PoiContainer";
import PicGalery from "../picGalery";
import Title from "../Title";
import { useVisitedSites } from "@/hooks/useVisitedSites";
import { useBreadcrumb } from "@/hooks/useBreadcrumbs";
import InfoCard from "../InfoCard";

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

  const Breadcrumbs = useBreadcrumb(currentUrl);
  useVisitedSites({ url: currentUrl })

  const mainText = enhanceHtml(ownContent, ownImages);

  const markerPoints: MarkersType = subContent.map(content => ({
    center: content.data.coordinates,
    name: content.data.name,
    slug: content.data.slug,
  }));

  const margin: CSSProperties = {
    marginTop: '4rem',
  }

  return (
    <Box style={margin} >
      {Breadcrumbs}

      <Title title={name} />

      <InfoCard
        population={population}
        county={county}
      />

      <Box style={margin}>
        {mainText}
      </Box>

      {subContent && subContent.length > 0 && (
        <PoiContainer
          title={`Point of interest in ${name}`}
          desc="description"
          pois={subContent}
          baseSlug={currentUrl}
        />
      )}

      <MapComponent width={'100%'} height={600} center={coordinates} zoom={10} markers={markerPoints} />

      <Box style={margin}>
        <PicGalery
          images={ownImages}
        />
      </Box>
    </Box>
  )

}

export default CityTemplate;

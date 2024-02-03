import React from 'react'
import Layout from '../components/layout'
import { myImageT } from '../types/imageTypes';
import { getMyImages } from '../utils/getImages';
import { enhanceHtml } from '../utils/enhanceHtml';
import { graphql } from 'gatsby';
import PicGalery from '../components/picGalery';
import { useAddHistory } from '../components/hooks/useAddHistory';
import PageName from '../components/PageName';
import GoBackButton from '../components/GoBackButton';

const PoiTemplate = ({ pageContext, data }) => {
  const {
    frontmatter: {
      coordinates, name, fullSlug, id, breadcrumbs, },
    html,
  } = pageContext;
  const { allFile: poiImages } = data;

  const myImages: Array<myImageT> = getMyImages(poiImages);
  const mainText = enhanceHtml(html, myImages);

  useAddHistory({ name, fullSlug, id }, myImages[0]);

  return (
    <Layout bc={breadcrumbs}>
      <GoBackButton />
      <PageName name={name} />

      {mainText}

      {myImages.length > 0 && (
        <PicGalery
          images={myImages}
        />
      )}
    </Layout>
  )
}

export default PoiTemplate;

export const data = graphql`
query($folderId: String){
  allFile(
    filter: {absolutePath: {regex: $folderId}, extension: {regex: "/(jpg|jpeg|png|gif)/"}}
  ) {
    edges {
      node {
        name
        childrenImageSharp {
          gatsbyImageData  
          fields {
            exif {
              raw {
                bigEndian
                image {
                  ImageDescription
                  GPSInfo
                }
              }
            }
          }
        }
      }
    }
  }
}`;
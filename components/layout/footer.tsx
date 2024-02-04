import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

const Footer = () => {
  const visitedSites = useSelector((state: RootState) => state.visited);

  return (
    <>
      <div>
        {visitedSites.map(({ url }) => {
          return (
            <p>
              {url}
            </p>
          )
        })}
      </div>
      <div>
        footer footer
      </div>
    </>
  );
}

export default Footer;
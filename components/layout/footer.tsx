import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

const Footer = () => {
  const visitedSites = useSelector((state: RootState) => state.footer);

  return (
    <>
      <div>
        {visitedSites.map(site => (
          <p key={site}>{site}</p>
        ))}
      </div>
      <div>
        footer footer
      </div>
    </>
  );
}

export default Footer;
import { Grid, GridItem } from 'components';
import { Link, useLocation } from 'react-router-dom';

export const CountryList = ({ countries }) => {
  const normCountries = countries.filter(el => el.country !== 'Russia');
  const location = useLocation();

  return (
    <Grid>
      {normCountries.map(el => (
        <GridItem key={el.id}>
          <Link to={`/country/${el.id}`} state={{ from: location }}>
            <img src={el.flag} alt={el.country} />
            <span>{el.country}</span>
          </Link>
        </GridItem>
      ))}
    </Grid>
  );
};

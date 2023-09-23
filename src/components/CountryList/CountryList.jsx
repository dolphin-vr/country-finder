import { Grid, GridItem } from 'components';

export const CountryList = ({ countries }) => {
  const normCountries= countries.filter(el=>el.country!=='Russia');
  return (
    <Grid>
      {normCountries.map(el=><GridItem key={el.id}>
        <img src={el.flag} alt={el.country} />
        <span>{el.country}</span>
      </GridItem>)}
    </Grid>
  )
  ;
};

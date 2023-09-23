import {
  Container,
  SearchForm,
  Section,
  Heading,
  Loader,
  CountryList,
} from 'components';
import { useEffect, useState } from 'react';
import { fetchByRegion } from 'service/country-service';

export const CountrySearch = () => {
  const [value, setValue] = useState('');
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState(null);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    if (value === '') {
      return;
    }
    setLoader(true);
    async function getData() {
      try {
        const responce = await fetchByRegion(value);
        setCountries(responce);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoader(false);
      }
    }
    getData();
  }, [value]);
  console.log(countries);
  return (
    <Section>
      <Container>
        <SearchForm setValue={setValue} />
        <CountryList countries={countries} />
      </Container>
    </Section>
  );
};

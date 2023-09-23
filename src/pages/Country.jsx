import { Section, Container, CountryInfo, Loader, Heading } from 'components';
import { useEffect, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { fetchCountry } from 'service/country-service';

export const Country = () => {
  const [countryInfo, setCountryInfo] = useState([]);
  const [error, setError] = useState(null);
  const [loader, setLoader] = useState(false);
  const { countryId } = useParams();
  const location = useLocation();

  useEffect(() => {
    setLoader(true);
    async function getData() {
      try {
        const responce = await fetchCountry(countryId);
        console.log(responce);
        setCountryInfo(responce);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoader(false);
      }
    }
    getData();
  }, [countryId]);

  const { flag, capital, country, id, languages, population } = countryInfo;

  const backLink = location.state?.from ?? '/';

  return (
    <>
      <Link to={backLink}>
        <button style={{ color: 'white' }}> --- Go back</button>
      </Link>
      {loader && <Loader />}
      <Section>
        <Container>
          <CountryInfo
            flag={flag}
            capital={capital}
            country={country}
            id={id}
            languages={languages}
            population={population}
          />
        </Container>
      </Section>
      {error && <Heading>{error}</Heading>}
    </>
  );
};

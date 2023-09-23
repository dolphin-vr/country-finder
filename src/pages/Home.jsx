import { Container, CountryList, Heading, Loader, Section } from 'components';
import { useEffect, useState } from 'react';
import { getCountries } from 'service/country-service';

export const Home = () => {
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState(null);
  const [loader, setLoader] = useState(false);
  
  useEffect(()=>{
    setLoader(true);
    async function getData(){
      try {
        const responce = await getCountries();
        setCountries(responce);              
      } catch (error) {
        setError(error.message)
      }
      finally{
        setLoader(false);
      }
    };
    getData();
  },[])

  return (
    <Section>
      <Container>
        {loader && <Loader/>}
        <CountryList countries={countries}/>
        {error && <Heading>{error}</Heading>}
      </Container>
    </Section>
  );
};

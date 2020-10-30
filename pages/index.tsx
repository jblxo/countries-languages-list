import Head from 'next/head'
import { useAllCountriesQuery } from '../src/generated/graphql';
import { useRouter } from 'next/dist/client/router';
import CountriesList from '../src/components/CountriesList';
import Pagination from '../src/components/Pagination';
import styled from 'styled-components';

const HomeStyles = styled.div`
  background-color: ${props => props.theme.colors.primary};
`;

export default function Home() {
  const router = useRouter();
  const { page } = router.query;
  const pageNum = page ? parseInt(page.toString()) : 1;
  const perPage = 10;
  const { data, loading, error } = useAllCountriesQuery();

  if(loading) return <div>Loading...</div>;
  if(error) return <div>Whooops! Something went wrong! {error.message}</div>

  const countriesCodes = data.countries.slice((pageNum - 1) * perPage, (pageNum - 1) * perPage + perPage).map((country) => country.code);

  return (
    <HomeStyles>
      <Head>
        <title>Countries and Languages List</title>
      </Head>
      <h1>Hello World</h1>
      <div>
        <CountriesList codes={countriesCodes} />
      </div>
      <div>
        <Pagination page={pageNum} perPage={perPage} count={data.countries.length} />
      </div>
    </HomeStyles>
  )
}

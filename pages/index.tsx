import Head from 'next/head'
import { useAllCountriesQuery } from '../src/generated/graphql';
import { useRouter } from 'next/dist/client/router';
import CountriesList from '../src/components/CountriesList';

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
    <div>
      <Head>
        <title>Countries and Languages List</title>
      </Head>
      <h1>Hello World</h1>
      <div>
        <CountriesList codes={countriesCodes} />
      </div>
    </div>
  )
}

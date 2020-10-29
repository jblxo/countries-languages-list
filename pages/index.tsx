import Head from 'next/head'
import { useAllCountriesQuery } from '../src/generated/graphql';

export default function Home() {
  const { data, loading, error } = useAllCountriesQuery();

  if(loading) return <div>Loading...</div>;
  if(error) return <div>Whooops! Something went wrong! {error.message}</div>

  return (
    <div>
      <Head>
        <title>Countries and Languages List</title>
      </Head>
      <h1>Hello World</h1>
      <div>
        {data.countries.map((country) => (
          <div key={country.code}>{country.name}</div>
        ))}
      </div>
    </div>
  )
}

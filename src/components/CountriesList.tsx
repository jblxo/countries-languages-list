import React from 'react';
import { useCountriesWithLanguagesQuery } from '../generated/graphql';
import Country from './Country';

interface Props {
  codes: string[];
}

export default function CountriesList({ codes }: Props) {
  const { data, loading, error } = useCountriesWithLanguagesQuery({variables: {codes}});

  if(loading) return <div>Loading...</div>;
  if(error) return <div>Whooops! Something went wrong! {error.message}</div>

  return (
    <div>
      {data.countries.map(country => (
        <Country country={country} />
      ))}
    </div>
  )
}
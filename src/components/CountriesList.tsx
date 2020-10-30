import React from 'react';
import { useCountriesWithLanguagesQuery } from '../generated/graphql';
import Country from './Country';
import styled from 'styled-components';

const CountriesListStyles = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 6rem;
  max-width: ${props => props.theme.maxWidth};
  margin: 3rem auto;
`;

interface Props {
  codes: string[];
}

export default function CountriesList({ codes }: Props) {
  const { data, loading, error } = useCountriesWithLanguagesQuery({variables: {codes}});

  if(loading) return <div>Loading...</div>;
  if(error) return <div>Whooops! Something went wrong! {error.message}</div>

  return (
    <CountriesListStyles>
      {data.countries.map(country => (
        <Country key={country.code} country={country} />
      ))}
    </CountriesListStyles>
  )
}
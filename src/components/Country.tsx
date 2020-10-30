import React from 'react';
import styled from 'styled-components';

const CountryStyles = styled.div`
  background: ${props => props.theme.offWhite};
  border: 1px solid ${props => props.theme.black};
  box-shadow: ${props => props.theme.boxShadow};
  position: relative;
  display: flex;
  flex-direction: column;

  h3 {
    text-align: center;
    border-bottom: 1px solid black;
    padding: 1.7rem 0.8rem;
  }

  .info {
    display: flex;
    width: 100%;
    flex-direction: column;
    text-align: center;
    padding: 1.3rem 0;
    border-bottom: 1px solid black;
  }

  .languages {
    padding: 2rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    text-align: center;
    grid-gap: 1.3rem;

    & div {
      transition: transform 0.5s ease-out;
      cursor: default;
    }

    & div:hover {
      transform: translateY(-3px) scale(1.1);
    }
  }
`;

interface Country {
  code: string;
  name: string;
  capital?: string;
  currency?: string;
  emoji: string;
  languages:
  {
    code: string;
    name?: string;
  }[]
}

interface Props {
  country: Country
}

export default function CountryComp({ country }: Props) {
  return (
    <CountryStyles>
      <h3>{country.name}</h3>
      <div className="info">
        <div>Capital: {country.capital}</div>
        <div>Currency: {country.currency}</div>
        <div>Emoji: {country.emoji}</div>
      </div>
      <div className="languages">
        {country.languages.map(lang => (
          <div key={country.code + lang.code}>{lang.name}</div>
        ))}
      </div>
    </CountryStyles>
  )
}
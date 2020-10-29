import React from 'react';

interface Country {
  code: string;
  name: string;
  languages: 
    {
      code: string;
      name?: string;
    }[]
}

interface Props {
  country: Country
}

export default function CountryComp({country}: Props) {
  return (
    <div key={country.code}>
      <h3>{country.name}</h3>
      <ul>
        {country.languages.map(lang => (
          <li key={country.code + lang.code}>{lang.name}</li>
        ))}
      </ul>
    </div>
  )
}
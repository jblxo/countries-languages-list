import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const PaginationStyles = styled.div`
  text-align: center;
  display: inline-grid;
  grid-template-columns: repeat(4, auto);
  align-items: stretch;
  justify-content: center;
  align-content: center;
  margin: 2rem 0;
  border: 1px solid ${props => props.theme.black};
  border-radius: 10px;
  & > * {
    margin: 0;
    padding: 1.5rem 3rem;
    border-right: 1px solid ${props => props.theme.rose};
    &:last-child {
      border-right: none;
    }
  }
  a[aria-disabled='true'] {
    color: grey;
    pointer-events: none;
  }
`;

interface Props {
  page: number;
  count: number;
  perPage: number;
}

export default function Pagination({ page, count, perPage }: Props) {
  const pages = Math.ceil(count / perPage);

  return (
    <PaginationStyles>
      <Link
        href={{
          pathname: '/',
          query: { page: page - 1 }
        }}
      >
        <a aria-disabled={page <= 1}>
          ⬅ Prev
        </a>
      </Link>
      <p>
        Page {page} of {pages}
      </p>
      <Link
        href={{
          pathname: '/',
          query: { page: page + 1 }
        }}
        prefetch
      >
        <a aria-disabled={page >= pages}>
          Next ➡
        </a>
      </Link>
    </PaginationStyles>
  )
}
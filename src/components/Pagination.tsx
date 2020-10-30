import React from 'react';
import Link from 'next/link';

interface Props {
  page: number;
  count: number;
  perPage: number;
}

export default function Pagination({ page, count, perPage }: Props) {
  const pages = Math.ceil(count / perPage);

  return (
    <>
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
    </>
  )
}
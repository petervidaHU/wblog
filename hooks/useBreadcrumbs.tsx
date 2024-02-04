import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from 'next/link';

const BASE_URL = 'http://localhost:3000'

export const useBreadcrumb = (urlString: string) => {
  const steps = urlString.split('/');

  return (
    <Breadcrumbs aria-label="breadcrumb">
      {steps.map((step, index) => (
        <Link
          key={`${index}${step}`}
          color={index === steps.length - 1 ? 'textPrimary' : 'inherit'}
          href={`${BASE_URL}${steps.slice(0, index + 1).join('/')}`}
          passHref
        >
          {step}
        </Link>
      ))}
    </Breadcrumbs>
  );
};

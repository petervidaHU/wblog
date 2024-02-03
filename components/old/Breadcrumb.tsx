import React, { FC } from 'react';
import { Link, withPrefix } from 'gatsby';
import { Breadcrumbs } from '@mui/material';

interface BreadcrumbsProps {
  crumbs: Array<{
    pathname: string;
    crumbLabel: string;
  }>;
}

const BreadcrumbsComp: FC<BreadcrumbsProps> = ({ crumbs }) => (
  <Breadcrumbs>
    {crumbs.map((crumb, index) => (
      <span key={crumb.pathname}>
        <Link to={withPrefix(crumb.pathname)}>
          {crumb.crumbLabel}
        </Link>
        {index < crumbs.length - 1 && <span>&gt;</span>}
      </span>
    ))}
  </Breadcrumbs>
);

export default BreadcrumbsComp;

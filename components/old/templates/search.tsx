import React, { useState } from 'react';
import SearchInput from '../components/searchInput';
import SearchList from '../components/SearchList';
import Layout from '../components/layout';
import { breadCrumbT } from '../types/common';

export type searchIndexT = Array<{
  name: string;
  slug: string;
  id: string;
}>

const SearchComp = ({ pageContext }) => {
  const { indexinc }: { indexinc: searchIndexT } = pageContext;
  const [filteredData, setfilteredData] = useState<searchIndexT>([]);

  const breadcrumbs: breadCrumbT = {
    pathname: '/search',
    crumbLabel: 'Search',
  };

  const searchFunc = (query: string) => {
    const filteredResults: searchIndexT = indexinc.filter((value) => {
      return value.name.toLowerCase().includes(query.toLowerCase())
    })
    setfilteredData(filteredResults);
  }

  return (
    <Layout bc={[breadcrumbs]}>
      <SearchInput onSearch={searchFunc} />
      <SearchList
        list={filteredData}
        bcOverride={breadcrumbs}
      />
    </Layout>
  );
};

export default SearchComp;

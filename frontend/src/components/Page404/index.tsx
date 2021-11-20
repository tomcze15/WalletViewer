import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

const PageWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 5rem;
`;

const Page404 = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <PageWrapper>
      <h1>{ t('NOT_FOUND_TITLE') }</h1>
    </PageWrapper>
  );
};

export default Page404;

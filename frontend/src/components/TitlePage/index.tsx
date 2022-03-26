import { Helmet } from 'react-helmet-async';

import { ITitlePageProps } from 'common/types';

const index = ({ title }: ITitlePageProps): JSX.Element => (
  <Helmet>
    <title>{title}</title>
  </Helmet>
);

export default index;

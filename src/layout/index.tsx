import React from 'react';

import { ILayoutProps } from 'common/types';
import Menu from 'components/Menu';

const index = ({ children }: ILayoutProps): JSX.Element => (
  <>
    <Menu />
    { children }
  </>
);

export default index;

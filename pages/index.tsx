import * as React from 'react';
import withBody from '../client/withBody';
import Cards from '../client/components/Cards';

const Homepage = () => (
  <>
    <Cards />
    <Cards />
    <Cards />
  </>
);

export default withBody(Homepage);
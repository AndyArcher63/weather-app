// @flow
import * as React from 'react';
import Classes from './NoResults.module.css';

const NoResults = () => (
  <p className={Classes.noResults}>
    No results matching your search criteria please try again.
  </p>
);

export default NoResults;

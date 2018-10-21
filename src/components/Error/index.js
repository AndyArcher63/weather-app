// @flow
import React from 'react';
import Classes from './Error.module.css';

type Props = {
  error: boolean,
}

const Error = (props: Props) => {
  const { error } = props;

  if (!error) {
    return null;
  }
  return (
    <div className={Classes.error}>
      Theres been an error connecting to the Weather Api.
    </div>
  );
};

export default Error;

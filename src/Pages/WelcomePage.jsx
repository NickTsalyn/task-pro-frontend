import React from 'react';
import { Welcome } from 'components/Welcome/Welcome';
import {Helmet} from 'react-helmet';

export default function WelcomePage() {
  return (
    <>
    <Helmet>
      <title>Task Pro</title>
    </Helmet>
      <Welcome />
    </>
  );
}

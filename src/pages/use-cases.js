import React from 'react';
import { Helmet } from 'react-helmet';
import data from '../data/use-cases.json';
import AptibleLayout from '../components/layouts/AptibleLayout';
import UseCases from '../components/use-cases/UseCases';
import ZeroTo from '../components/footer/ZeroTo';

const UseCasesPage = () => (
  <AptibleLayout>
    <Helmet>
      <title>Aptible | Use Cases</title>
      <meta name="description" content="Aptible is the leading security management platform for small companies. We help companies shorten sales cycles through security. We offer pricing plans that work for any business that needs to improve their security." />
    </Helmet>
    <UseCases />
    <ZeroTo />
  </AptibleLayout>
);

export default UseCasesPage;

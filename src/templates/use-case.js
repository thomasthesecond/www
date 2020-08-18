import React from 'react';
import { Helmet } from 'react-helmet';
import AptibleLayout from '../components/layouts/AptibleLayout';
import Container from '../components/container/Container';
import Section from '../components/shared/Section';
import Hero from '../components/use-cases/Hero';
import Blocks from '../components/use-cases/Blocks';

const UseCaseTemplate = ({ pageContext }) => {
  const {
    title,
    slug,
    body,
    sections,
  } = pageContext;

  return (
    <AptibleLayout>
      <Helmet>
        <title>Aptible | Use Cases | {title}</title>
        <meta name="description" content="" />
      </Helmet>

      <Hero
        title={title}
        body={body}
      />

      <Container>
        {sections.map((section) => (
          <Section key={section.title} title={section.title} body={section.body}>
            <Blocks blocks={section.blocks} />
          </Section>
        ))}
      </Container>
    </AptibleLayout>
  )
};

export default UseCaseTemplate;

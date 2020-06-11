import React from "react";
import Layout from "../components/layout/layout";
import SEO from "../components/seo";

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <h1>About Me</h1>
    <p>
      I am a US born, UK based Web Developer specializing in building Front End
      functionality for web sites and applications. I have worked in this field
      since 2008 and built web sites for light, medium, and heavy traffic sites,
      as well as greenfield software solutions.
    </p>

    <p>
      My past experience has included working on small teams that have grown
      into large ones, as well as working independently on employer projects and
      freelance client work.
    </p>

    <p>
      Currently, I am a Senior UI Developer for a global tech company migrating
      a legacy management console to a single-page application using TypeScript,
      React, and GraphQL.
    </p>

    <p>
      Prior to my current role, I was the Head of Software Development managing
      a small team of software developers building products in the Network
      Security space. I was 100% hands-on, and was responsible for 100% of the
      Front End code, but also had responsibilities in both the Full Stack, and
      Management worlds.
    </p>
  </Layout>
);
export default AboutPage;

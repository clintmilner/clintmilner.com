import React from "react";
import Layout from "../components/layout/layout";
import SEO from "../components/seo";
import { graphql } from "gatsby";

export default function PageTemplate({ data }) {
  console.log(data);
  const { allMarkdownRemark } = data;
  const [page] = allMarkdownRemark.nodes;
  return (
    <Layout>
      <SEO title={page.frontmatter?.title} />
      <h1>{page.frontmatter?.title}</h1>
      <span dangerouslySetInnerHTML={{ __html: page?.html }} />
    </Layout>
  );
}

export const pageQuery = graphql`
  query PageQuery($path: String!) {
    allMarkdownRemark(filter: { frontmatter: { path: { eq: $path } } }) {
      nodes {
        frontmatter {
          path
          title
        }
        html
      }
    }
  }
`;

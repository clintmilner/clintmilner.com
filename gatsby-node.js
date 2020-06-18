const path = require("path");

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;
  const pageTemplate = path.resolve(`src/templates/page-template.js`);

  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              className
              order
              path
              title
            }
            html
            id
          }
        }
      }
    }
  `).then((res) => {
    if (res.errors) {
      return Promise.reject(res.errors);
    }
    console.log(res.data.allMarkdownRemark.edges);
    res.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: pageTemplate,
      });
    });
  });
};

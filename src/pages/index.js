import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import SEO from '../components/seo';

const IndexPage = () => {
  const {
    meta,
    content,
    experiences,
    education,
    awards,
    testimonials,
  } = useStaticQuery(
    graphql`
      query {
        meta: site {
          siteMetadata {
            author
            email
          }
        }
        content: markdownRemark(fileAbsolutePath: { regex: "/home.md/" }) {
          frontmatter {
            title
            description
          }
          html
        }
        experiences: allFile(
          filter: { sourceInstanceName: { eq: "experiences" } }
          sort: {
            fields: childMarkdownRemark___frontmatter___start
            order: DESC
          }
        ) {
          edges {
            node {
              id
              childMarkdownRemark {
                frontmatter {
                  start
                  end
                  company
                  role
                  responsibilities
                }
                html
              }
            }
          }
        }
        education: allFile(
          filter: { sourceInstanceName: { eq: "education" } }
          sort: {
            fields: childMarkdownRemark___frontmatter___start
            order: DESC
          }
        ) {
          edges {
            node {
              id
              childMarkdownRemark {
                frontmatter {
                  start
                  end
                  school
                  degree
                }
              }
            }
          }
        }
        awards: allFile(
          filter: { sourceInstanceName: { eq: "awards" } }
          sort: {
            fields: childMarkdownRemark___frontmatter___year
            order: DESC
          }
        ) {
          edges {
            node {
              id
              childMarkdownRemark {
                frontmatter {
                  year
                  award
                  issuer
                }
                html
              }
            }
          }
        }
        testimonials: allFile(
          filter: { sourceInstanceName: { eq: "testimonials" } }
        ) {
          edges {
            node {
              id
              childMarkdownRemark {
                frontmatter {
                  name
                  role
                  company
                }
                html
              }
            }
          }
        }
      }
    `
  );

  const {
    frontmatter: { title, description },
    html,
  } = content;

  return (
    <>
      <SEO {...{ title, description }} />
      <header dangerouslySetInnerHTML={{ __html: html }} />
      <section>
        <h2>Experiences</h2>
        {experiences.edges.map(
          ({
            node: {
              id,
              childMarkdownRemark: {
                frontmatter: { start, end, company, role, responsibilities },
                html,
              },
            },
          }) => (
            <div key={id}>
              {start}
              {end}
              {company}
              {role}
              {responsibilities}
              <div dangerouslySetInnerHTML={{ __html: html }} />
            </div>
          )
        )}
      </section>

      <section>
        <h2>Education</h2>
        {education.edges.map(
          ({
            node: {
              id,
              childMarkdownRemark: {
                frontmatter: { start, end, school, degree },
              },
            },
          }) => (
            <div key={id}>
              {start}
              {end}
              {school}
              {degree}
            </div>
          )
        )}
      </section>

      <section>
        <h2>Honors & Awards</h2>
        {awards.edges.map(
          ({
            node: {
              id,
              childMarkdownRemark: {
                frontmatter: { year, award, issuer, info },
                html,
              },
            },
          }) => (
            <div key={id}>
              {year}
              {award}
              {issuer}
              <div dangerouslySetInnerHTML={{ __html: html }} />
            </div>
          )
        )}
      </section>

      <section>
        <h2>Contact</h2>
        E-mail{' '}
        <a href={`mailto:${meta.siteMetadata.email}`}>
          {meta.siteMetadata.email}
        </a>
        Twitter{' '}
        <a href={`https://twitter.com/${meta.siteMetadata.author}`}>
          @{meta.siteMetadata.author}
        </a>
        LinkedIn{' '}
        <a href={`https://www.linkedin.com/in/${meta.siteMetadata.author}/`}>
          /in/{meta.siteMetadata.author}
        </a>
        Github{' '}
        <a href={`https://github.com/${meta.siteMetadata.author}`}>
          /{meta.siteMetadata.author}
        </a>
      </section>

      <section>
        <h2>Testimonials</h2>
        {testimonials.edges.map(
          ({
            node: {
              id,
              childMarkdownRemark: {
                frontmatter: { name, role, company },
                html,
              },
            },
          }) => (
            <div key={id}>
              {name}
              {role}
              {company}
              <div dangerouslySetInnerHTML={{ __html: html }} />
            </div>
          )
        )}
      </section>
    </>
  );
};

export default IndexPage;

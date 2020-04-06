import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import Header from '../components/header';
import Section from '../components/section';
import SEO from '../components/seo';
import Top from '../components/top';

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
            headline
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
    frontmatter: { title, description, headline },
    html,
  } = content;

  return (
    <>
      <SEO {...{ title, description }} />
      <Top />
      <Header {...{ headline, html }} />

      <Section
        title="Experiences"
        columnHeaders={['Years', 'Company', 'Role', 'Responsibilities', 'Info']}
        columnData={experiences.edges.map(
          ({
            node: {
              id,
              childMarkdownRemark: {
                frontmatter: { start, end, company, role, responsibilities },
                html,
              },
            },
          }) => [id, `${start} — ${end}`, company, role, responsibilities, html]
        )}
      />

      <Section
        title="Education"
        columnHeaders={['Years', 'School', 'Degree']}
        columnData={education.edges.map(
          ({
            node: {
              id,
              childMarkdownRemark: {
                frontmatter: { start, end, school, degree },
              },
            },
          }) => [id, `${start} — ${end}`, school, degree]
        )}
      />

      <Section
        title="Honors & Awards"
        columnHeaders={['Year', 'Award', 'Issuer', 'Info']}
        columnData={awards.edges.map(
          ({
            node: {
              id,
              childMarkdownRemark: {
                frontmatter: { year, award, issuer, info },
                html,
              },
            },
          }) => [id, year, award, issuer, html]
        )}
      />

      <section style={{ marginBottom: '6rem' }}>
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

      <section style={{ marginBottom: '6rem' }}>
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

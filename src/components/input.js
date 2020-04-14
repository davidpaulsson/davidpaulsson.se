import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import Contact from './contact';
import Header from './header';
import Section from './section';
import SEO from './seo';
import Top from './top';
import Testimonials from './testimonials';

const Input = () => {
  const { content, experiences, education, awards } = useStaticQuery(
    graphql`
      query {
        content: markdownRemark(fileAbsolutePath: { regex: "/home.md/" }) {
          frontmatter {
            title
            description
            headline
            subtitle
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
                  link
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
      }
    `
  );

  const {
    frontmatter: { title, description, headline, subtitle },
    html,
  } = content;

  return (
    <>
      <SEO {...{ title, description }} />
      <Top />
      <Header {...{ headline, subtitle, html }} />

      <Section
        title="Experiences"
        columnHeaders={['Years', 'Company', 'Role', 'Responsibilities', 'Info']}
        columnData={experiences.edges.map(
          ({
            node: {
              id,
              childMarkdownRemark: {
                frontmatter: {
                  start,
                  end,
                  company,
                  link,
                  role,
                  responsibilities,
                },
                html,
              },
            },
          }) => [
            id,
            `${start} — ${end}`,
            link ? `<a href="${link}">${company}</a>` : company,
            role,
            responsibilities,
            html,
          ]
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

      <Contact />

      <Testimonials />
    </>
  );
};

export default Input;

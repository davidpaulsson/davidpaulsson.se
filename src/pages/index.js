import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import Contact from '../components/contact';
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

      <Contact
        data={[
          {
            key: `E-mail`,
            val: meta.siteMetadata.email,
            url: `mailto:${meta.siteMetadata.email}`,
          },
          {
            key: `Twitter`,
            val: `@${meta.siteMetadata.author}`,
            url: `https://twitter.com/${meta.siteMetadata.author}`,
          },
          {
            key: `Linkedin`,
            val: `/in/${meta.siteMetadata.author}`,
            url: `https://www.linkedin.com/in/${meta.siteMetadata.author}/`,
          },
          {
            key: `Github`,
            val: `/${meta.siteMetadata.author}`,
            url: `https://github.com/${meta.siteMetadata.author}`,
          },
        ]}
      />

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

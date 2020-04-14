import React from 'react';
import './section.scss';
import slugify from 'slugify';

const Section = ({ title, columnHeaders, columnData }) => (
  <section className="section">
    <h2 className="section__title">{title}</h2>
    <ul>
      {columnData.map((data, index) => (
        <React.Fragment key={title + index}>
          {index === 0 && (
            <div
              className={`section__headers section__headers--${slugify(
                title.toLowerCase()
              )}`}
            >
              {columnHeaders.map((header, index) => (
                <div key={title + header + index}>{header}</div>
              ))}
            </div>
          )}
          <li
            className={`section__data section__data--${slugify(
              title.toLowerCase()
            )}`}
          >
            {data.map((item, index) => (
              <React.Fragment>
                {index === 1 ? (
                  <h3
                    className="section__data__item"
                    dangerouslySetInnerHTML={{ __html: item }}
                  />
                ) : (
                  <div
                    className="section__data__item"
                    dangerouslySetInnerHTML={{ __html: item }}
                  />
                )}
              </React.Fragment>
            ))}
          </li>
        </React.Fragment>
      ))}
    </ul>
  </section>
);

export default Section;

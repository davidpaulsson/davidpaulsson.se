import React from 'react';
import './section.scss';
import slugify from 'slugify';

const Section = ({ title, columnHeaders, columnData }) => (
  <section className="section">
    <h2 className="section__title">{title}</h2>
    <ul>
      {columnData.map((data, index) => (
        <>
          {index === 0 && (
            <div
              className={`section__headers section__headers--${slugify(
                title.toLowerCase()
              )}`}
            >
              {columnHeaders.map(header => (
                <div>{header}</div>
              ))}
            </div>
          )}
          <li
            className={`section__data section__data--${slugify(
              title.toLowerCase()
            )}`}
            key={data.shift()}
          >
            {data.map((item, index) =>
              index === 1 ? (
                <h3
                  className="section__data__item"
                  key={index + item}
                  dangerouslySetInnerHTML={{ __html: item }}
                />
              ) : (
                <div
                  className="section__data__item"
                  key={index + item}
                  dangerouslySetInnerHTML={{ __html: item }}
                />
              )
            )}
          </li>
        </>
      ))}
    </ul>
  </section>
);

export default Section;

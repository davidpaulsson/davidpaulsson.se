import React from 'react';
import SEO from './seo';
import Top from './top';

const Output = () => {
  return (
    <div style={{ minHeight: '100vh' }}>
      <SEO
      // {...{ title, description }}
      />
      <Top>
        <div>Output</div>
        001-034
      </Top>
    </div>
  );
};

export default Output;

/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

import './src/styles/reset.scss';
import './src/styles/variables.scss';
import './src/styles/global.scss';
import './src/styles/fonts.scss';

// detect and toggle dark mode
const htmlTag = document.body.parentNode;
if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
  htmlTag.classList.add('__dark-mode');
}

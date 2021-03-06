/* eslint no-unused-expressions: 0 */
import { injectGlobal } from 'emotion'
import { colors } from './theme'

injectGlobal`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  /**
   * IE10+ doesn't honor '<meta name="viewport">' in some cases.
   */
  :root {
    @viewport {
      width: device-width;
    }
  }

  html, body {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
  }

  html {
    background-color: ${colors.gray};
    font: 105%/1.9 'system-ui', -apple-system, 'BlinkMacSystemFont', 'Segoe UI',
      'Roboto', 'Helvetica', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
      'Segoe UI Symbol';
    text-rendering: optimizeLegibility;
    box-sizing: border-box;
    overflow-y: scroll;
    -ms-overflow-style: scrollbar;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    font-family: 'system-ui', -apple-system, 'BlinkMacSystemFont', 'Segoe UI',
      'Roboto', 'Helvetica', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
      'Segoe UI Symbol';
    font-weight: 100;
    word-wrap: break-word;
    font-kerning: normal;
    font-feature-settings: 'kern', 'liga', 'clig', 'calt';
  }

  /**
   * Shim for "new" HTML5 structural elements to display correctly (IE10, older browsers)
   */
  article, aside, details, figcaption, figure, footer, header, main, menu, nav, section, summary {
    display: block;
  }

  /**
   * Suppress the focus outline on elements that cannot be accessed via keyboard.
   * This prevents an unwanted focus outline from appearing around elements that
   * might still respond to pointer events.
   *
   * Credit: https://github.com/suitcss/base
   */
  [tabindex="-1"]:focus {
    outline: 0 !important;
  }

  audio,
  canvas,
  progress,
  video {
    display: inline-block;
  }

  audio:not([controls]) {
    display: none;
    height: 0;
  }

  progress {
    vertical-align: baseline;
  }

  [hidden],
  template {
    display: none;
  }

  a {
    color: ${colors.link};
    text-decoration: none;
    background-color: transparent;
    -webkit-text-decoration-skip: objects;
  }

  a:active,
  a:hover {
    color: ${colors.linkHover};
    text-decoration: none;
    outline-width: 0;
  }

  abbr[title] {
    border-bottom: none;
    text-decoration: underline;
    text-decoration: underline dotted;
  }

  b,
  strong {
    font-weight: inherit;
    font-weight: bolder;
  }

  dfn {
    font-style: italic;
  }

  mark {
    background-color: ${colors.yellow};
  }

  small {
    font-size: 80%;
  }

  sub,
  sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }

  sub {
    bottom: -0.25em;
  }

  sup {
    top: -0.5em;
  }

  svg:not(:root) {
    overflow: hidden;
  }

  code,
  kbd,
  pre,
  samp {
    font-family: monospace, monospace;
    font-size: 1em;
  }

  figure {
    margin: 1em 40px 0;
  }

  /**
   * Content grouping
   *
   * 1. Add the correct box sizing in Firefox.
   * 2. Show the overflow in Edge and IE.
   */
  hr {
    box-sizing: content-box;
    height: 0;
    overflow: visible;
  }

  button,
  input,
  optgroup,
  select,
  textarea {
    font: inherit;
    margin: 0;
  }

  optgroup {
    font-weight: 700;
  }

  button,
  input {
    overflow: visible;
  }

  button,
  select {
    text-transform: none;
  }

  [type='reset'],
  [type='submit'],
  button,
  html [type='button'] {
    -webkit-appearance: button;
  }

  [type='button']::-moz-focus-inner,
  [type='reset']::-moz-focus-inner,
  [type='submit']::-moz-focus-inner,
  button::-moz-focus-inner {
    border-style: none;
    padding: 0;
  }

  [type='button']:-moz-focusring,
  [type='reset']:-moz-focusring,
  [type='submit']:-moz-focusring,
  button:-moz-focusring {
    outline: 1px dotted ButtonText;
  }

  fieldset {
    border: 1px solid silver;
    margin: 0 2px;
    padding: 0.35em 0.625em 0.75em;
  }

  legend {
    box-sizing: border-box;
    color: inherit;
    display: table;
    max-width: 100%;
    padding: 0;
    white-space: normal;
  }

  textarea {
    overflow: auto;
  }

  [type='checkbox'],
  [type='radio'] {
    box-sizing: border-box;
    padding: 0;
  }

  [type='number']::-webkit-inner-spin-button,
  [type='number']::-webkit-outer-spin-button {
    height: auto;
  }

  [type='search'] {
    -webkit-appearance: textfield;
    outline-offset: -2px;
  }

  [type='search']::-webkit-search-cancel-button,
  [type='search']::-webkit-search-decoration {
    -webkit-appearance: none;
  }

  ::-webkit-input-placeholder {
    color: inherit;
    opacity: 0.54;
  }

  ::-webkit-file-upload-button {
    -webkit-appearance: button;
    font: inherit;
  }

  img {
    border-style: none;
    max-width: 100%;
    padding: 0;
    margin: 1.55rem 0 0;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    padding: 0;
    margin: 1.55rem 0 0;
    color: inherit;
    font-family: 'system-ui', -apple-system, 'BlinkMacSystemFont', 'Segoe UI',
      'Roboto', 'Helvetica', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
      'Segoe UI Symbol';
    font-weight: 100;
    text-rendering: optimizeLegibility;
    line-height: 1.1;
  }
  h1 { font-size: 2.2rem; }
  h2 { font-size: 2rem; }
  h3 { font-size: 1.8rem; }
  h4 { font-size: 1.6rem; }
  h5 { font-size: 1.4rem; }
  h6 { font-size: 1.2rem; }

  hgroup {
    padding: 0;
    margin: 1.55rem 0 0;
  }

  ul {
    margin: 1.55rem 0 0 1.55rem;
    padding: 0;
    list-style-position: outside;
    list-style-image: none;
  }

  ol {
    margin: 1.55rem 0 0 1.55rem;
    padding: 0;
    list-style-position: outside;
    list-style-image: none;
  }

  dl {
    padding: 0;
    margin: 1.55rem 0 0;
  }

  dd {
    padding: 0;
    margin: 1.55rem 0 0;
  }

  p {
    padding: 0;
    margin: 1.55rem 0 0;
  }

  figure {
    padding: 0;
    margin: 1.55rem 0 0;
  }

  pre {
    padding: 0;
    margin: 1.55rem 0 0;
    font-size: 0.85rem;
    line-height: 1.55rem;
  }

  table {
    padding: 0;
    margin: 1.55rem 0 0;
    font-size: 1rem;
    line-height: 1.55rem;
    border-collapse: collapse;
    width: 100%;
  }

  fieldset {
    padding: 0;
    margin: 1.55rem 0 0;
  }

  blockquote {
    margin: 1.55rem 1.55rem 0 ;
    padding: 0;
  }

  form {
    padding: 0;
    margin: 1.55rem 0 0;
  }

  noscript {
    padding: 0;
    margin: 1.55rem 0 0;
  }

  iframe {
    padding: 0;
    margin: 1.55rem 0 0;
  }

  hr {
    padding: 0;
    margin: 0 0 calc(1.55rem - 1px);
    background: hsla(0, 0%, 0%, 0.2);
    border: none;
    height: 1px;
  }

  address {
    padding: 0;
    margin: 1.55rem 0 0;
  }

  b {
    font-weight: bold;
  }

  strong {
    font-weight: bold;
  }

  dt {
    font-weight: bold;
  }

  th {
    font-weight: bold;
  }

  li {
    margin-bottom: calc(1.55rem / 2);
  }

  ol li {
    padding-left: 0;
  }

  ul li {
    padding-left: 0;
  }

  li > ul,
  li > ol {
    margin-left: 1.55rem;
    margin-bottom: calc(1.55rem / 2);
    margin-top: calc(1.55rem / 2);
  }

  blockquote *:last-child {
    margin-bottom: 0;
  }

  li *:last-child {
    margin-bottom: 0;
  }

  p *:last-child {
    margin-bottom: 0;
  }

  li > p {
    margin-bottom: calc(1.55rem / 2);
  }

  code {
    font-size: 0.85rem;
    line-height: 1.55rem;
  }

  kbd {
    font-size: 0.85rem;
    line-height: 1.55rem;
  }

  samp {
    font-size: 0.85rem;
    line-height: 1.55rem;
  }

  abbr {
    border-bottom: 1px dotted hsla(0, 0%, 0%, 0.5);
    cursor: help;
  }

  acronym {
    border-bottom: 1px dotted hsla(0, 0%, 0%, 0.5);
    cursor: help;
  }

  abbr[title] {
    border-bottom: 1px dotted hsla(0, 0%, 0%, 0.5);
    cursor: help;
    text-decoration: none;
  }

  thead {
    text-align: left;
  }

  td,
  th {
    text-align: left;
    border-bottom: 1px solid hsla(0, 0%, 0%, 0.12);
    font-feature-settings: 'tnum';
    padding-left: 1.03333rem;
    padding-right: 1.03333rem;
    padding-top: 0.775rem;
    padding-bottom: calc(0.775rem - 1px);
  }

  th:first-child,
  td:first-child {
    padding-left: 0;
  }

  th:last-child,
  td:last-child {
    padding-right: 0;
  }
`

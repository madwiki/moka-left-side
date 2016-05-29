require('./styles/index.scss');

import React from 'react'
import {render} from 'react-dom'

import App from './containers/App'


var rootElement = document.getElementById('app');


render(
  <App>
  </App>,
  rootElement
  );

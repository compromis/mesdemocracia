import React from 'react';
import ReactDOM from 'react-dom';
import { TranslatorProvider } from "react-translate";

import '../sass/app.scss';

import Layout from './layout';
import LayoutES from './layout-es';

import catalan from './i18n/ca.js';
import spanish from './i18n/es.js';

var translations = language == 'es' ? spanish : catalan;

class App extends React.Component {
  render(){
    return(
      <TranslatorProvider translations={translations}>
        { language == 'es' ? <LayoutES /> : <Layout /> }
      </TranslatorProvider>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

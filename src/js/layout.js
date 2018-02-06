import React from 'react';

import { translate } from "react-translate";

import Header from './components/header';
import Footer from './components/footer';

class Layout extends React.Component {

  render() {

    return (
      <div>
        <Header />

        <div className="container">
          {this.props.t('LABEL')}
        </div>

        <Footer />
      </div>
    );
  }
}

export default translate("Layout")(Layout);

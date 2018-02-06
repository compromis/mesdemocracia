import React from 'react';

import { translate } from "react-translate";

import Header from './components/header';
import Hero from './components/hero';
import Footer from './components/footer';

class Layout extends React.Component {

  render() {

    return (
      <div>
        <Header />
        <Hero />
        <Footer />
      </div>
    );
  }
}

export default translate("Layout")(Layout);

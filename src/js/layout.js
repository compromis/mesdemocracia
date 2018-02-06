import React from 'react';

import { translate } from "react-translate";

import Header from './components/header';
import Hero from './components/hero';
import Progress from './components/progress';
import Footer from './components/footer';

class Layout extends React.Component {

  render() {

    return (
      <div>
        <Header />
        <Hero />
        <div className="main-block">
          <div className="container" id="content">
            <Progress />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default translate("Layout")(Layout);

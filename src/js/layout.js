import React from 'react';

import { translate } from "react-translate";

import Header from './components/header';
import Hero from './components/hero';
import Content from './components/content';
import Support from './components/support';
import Poll from './components/poll';
import Footer from './components/footer';

class Layout extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <Header />
        <Hero />

        <div className="main-block">
          <div className="container" id="content">
            <div className="row">
              <div className="col-md-12">
                <Content />
              </div>
            </div>
          </div>
        </div>

        <div className="main-block">
          <div className="container" id="content">
            <div className="row">
              <div className="col-md-12">
                <Support />
              </div>
            </div>
          </div>
        </div>

        <div className="main-block">
          <div className="container" id="content">
            <div className="row">
              <div className="col-md-12">
                <Poll />
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}

export default translate("Layout")(Layout);

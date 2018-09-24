import React from 'react';

import { translate } from "react-translate";

import HeaderES from './components-es/header';
import HeroES from './components-es/hero';
import ContentES from './components-es/content';
import SupportES from './components-es/support';
import PollES from './components-es/poll';
import FooterES from './components-es/footer';

class LayoutES extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <HeaderES />
        <HeroES />

        <div className="main-block">
          <div className="container" id="content">
            <div className="row">
              <div className="col-md-12">
                <ContentES />
              </div>
            </div>
          </div>
        </div>

        <div className="main-block">
          <div className="container" id="content">
            <div className="row">
              <div className="col-md-12">
                <SupportES />
              </div>
            </div>
          </div>
        </div>

        <div className="main-block">
          <div className="container" id="content">
            <div className="row">
              <div className="col-md-12">
                <PollES />
              </div>
            </div>
          </div>
        </div>

        <FooterES />
      </div>
    );
  }
}

export default translate("LayoutES")(LayoutES);

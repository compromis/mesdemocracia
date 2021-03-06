import React from 'react';
import { translate } from "react-translate";

class Header extends React.Component {

  constructor(){
    super();

    this.state = {
      sherableURL: 'http://mesdemocracia.com',
      sherableText: 'Consulta la Proposta de Reforma Electoral de Compromís',
    }
  }

  render() {

    const { sherableURL, sherableText } = this.state;

    return (
      <nav className="navbar navbar-default navbar-compromis navbar-fixed-top">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#languages-navbar" aria-expanded="false">
              <span className="sr-only">Idioma</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="#">
              <img src="https://compromis.net/sub/images/logo.svg" alt="Compromís" />
            </a>
            <div className="navbar-text navbar-campaign-name">
              <a href="/">#MásDemocracia</a>
            </div>
          </div>

          <div className="collapse navbar-collapse" id="languages-navbar">
            <ul className="nav navbar-nav navbar-right">
              <li>
                <div className="social-buttons">
                  <iframe
                    src={'https://www.facebook.com/plugins/like.php?href=' + encodeURI(sherableURL) + '&width=198&layout=button_count&action=like&size=large&show_faces=false&share=true&height=37&appId=252515324782640&locale=ca_ES'}
                    width={213}
                    allowTransparency={true}
                    scrolling="no"
                    className="social-buttons__facebook"
                    frameBorder={0}
                    height={37}>
                  </iframe>
                  <iframe
                    src={'https://platform.twitter.com/widgets/tweet_button.html?size=l&url=' + encodeURI(sherableURL) + '&via=compromis&related=compromis&text=' + encodeURI(sherableText) + '&lang=es'}
                    className="social-buttons__twitter"
                    width={140}
                    height={37}
                    allowTransparency={true}
                    scrolling="no"
                    frameBorder={0}>
                  </iframe>
                </div>
              </li>

              <li className={language != 'es' ? 'active' : ''}><a href="/">Valencià</a></li>
              <li className={language == 'es' ? 'active' : ''}><a href="/cas">Castellano</a></li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default translate('Header')(Header);

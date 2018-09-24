import React from 'react';
import { translate } from "react-translate";
import Parliament from '../../images/icons/parliament.svg';
import Percentage from '../../images/icons/percentage.svg';
import Equality from '../../images/icons/equality.svg';
import Bullhorn from '../../images/icons/bullhorn.svg';
import Chevron from '../../images/icons/chevron.svg';

class Hero extends React.Component {

  scrollDown(e){
    e.preventDefault();

    let pos = $("#content").position();

    $("html, body").animate({
      scrollTop: (pos.top - 50)
    }, 500, 'swing');
  }

  render() {
    return (
      <div className="hero">
        <div className="hero-lighten-layer">
          <div className="logo">
            <img src={Parliament} alt="Corts Valencianes" />
          </div>
          <h1>Más Democracia</h1>
          <h2>Propuesta de Reforma Electoral de Compromís</h2>
          <div className="points">
            <div className="blocks">
              <div className="block">
                <div className="icon"><img src={Percentage} alt="Menys barreres" /></div>
                <h3>Menos barreras</h3>
                <p>Hay que acabar con una de las barreras electorales más duras de todo el Estado. Proponemos reducir la barrera para que ningún valenciano y valenciana se quede sin voz en Les Corts.</p>
              </div>
              <div className="block">
                <div className="icon"><img src={Equality} alt="Igualtat" /></div>
                <h3>Más igualdad</h3>
                <p>Proponemos que el parlamento refleje la realidad en nuestra sociedad. Con las listas cremallera conseguiremos una representación paritaria entre mujeres y hombres.</p>
              </div>
              <div className="block">
                <div className="icon"><img src={Bullhorn} alt="Participació" /></div>
                <h3>Más participación</h3>
                <p>Queremos ser el primer territorio que desbloquea las listas e incentive la celebración de primarias. Por una democracia real donde la ciudadanía no sólo pueda votar a los partidos sino también decidir sus listas.</p>
              </div>
            </div>

            <div className="more-info">
              <a href="#" onClick={(e) => this.scrollDown(e)}>
                <div className="border-left"></div>
                <span>Más información</span>
                <img src={Chevron} />
                <div className="border-right"></div>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default translate('Hero')(Hero);

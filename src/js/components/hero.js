import React from 'react';
import { translate } from "react-translate";
import Parliament from '../../images/icons/parliament.svg';
import Chevron from '../../images/icons/chevron.svg';

class Hero extends React.Component {

  render() {
    return (
      <div className="hero">
        <div className="hero-lighten-layer">
          <div className="logo">
            <img src={Parliament} alt="Corts Valencianes" />
          </div>
          <h1>Més Democràcia</h1>
          <h2>Proposta de Reforma Electoral de Compromís</h2>
          <div className="container points">
            <div className="blocks">
              <div className="block">
                <h3>Menys barreres</h3>
                <p>Cal acabar amb una de les barreres electorals més dures de tot l’Estat. Proposem reduir la barrera per a que cap valencià es quede sense veu a Les Corts.</p>
              </div>
              <div className="block">
                <h3>Més igualtat</h3>
                <p>Proposem que el parlament reflectisca la realitat en la nostra societat. Amb les llistes cremallera aconseguirem una representació paritària entre homes i dones.</p>
              </div>
              <div className="block">
                <h3>Més participació</h3>
                <p>Volem ser el primer territori que desbloqueja les llistes i incentiva la celebració de primàries. Per una democràcia real on la ciutadania no només puga votar els partits sinó també decidir les seues llistes.</p>
              </div>
            </div>

            <a href="" className="icon">
              Més informació
              <img src={Chevron} />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default translate('Hero')(Hero);

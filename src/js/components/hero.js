import React from 'react';
import { translate } from "react-translate";

class Hero extends React.Component {

  render() {
    return (
      <div className="hero">
        <div className="hero-lighten-layer">
          <h1>Més Democràcia</h1>
          <h2>Proposta de Reforma Electoral de Compromís</h2>

          <div className="container points">
            <div className="row">
              <div className="col-md-4">
                <div className="hero-block">
                  <h3>Menys barreres</h3>
                  <p>Cal acabar amb una de les barreres electorals més dures de tot l’Estat. Proposem reduir la barrera per a que cap valencià es quede sense veu a Les Corts.</p>
                </div>
            </div>
              <div className="col-md-4">
                <div className="hero-block">
                  <h3>Més igualtat</h3>
                  <p>Proposem que el parlament reflectisca la realitat en la nostra societat. Amb les llistes cremallera aconseguirem una representació paritària entre homes i dones.</p>
                </div>
            </div>
              <div className="col-md-4">
                <div className="hero-block">
                  <h3>Més participació</h3>
                  <p>Volem ser el primer territori que desbloqueja les llistes i incentiva la celebració de primàries. Per una democràcia real on la ciutadania no només puga votar els partits sinó també decidir les seues llistes.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default translate('Hero')(Hero);

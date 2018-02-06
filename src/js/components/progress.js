import React from 'react';
import { translate } from "react-translate";

class Progress extends React.Component {

  render() {
    return (
      <div className="progress">
        L’Estatut marca que per a aprovar la llei electoral es necessita el vot de dos terços de Les Corts. Això vol dir 66 diputats i diputades. No és un treball fàcil, però confiem en convèncer a esta àmplia majoria de la necessitat de comptar amb una llei electoral més avançada, democràtica, i participativa.
      </div>
    );
  }
}

export default translate('Progress')(Progress);

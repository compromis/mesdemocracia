import React from 'react';
import { translate } from "react-translate";

import { Doughnut } from 'react-chartjs-2';

class Support extends React.Component {

  constructor(){
    super();

    this.state = {
      chartData: {
      	labels: [
      		'Compromís',
      		'PSOE',
      		'Podemos',
          'Ciudadanos',
          'PP',
          'Vox'
      	],
      	datasets: [{
          borderWidth: 3,
          hoverBorderColor: '#ccc',
      		data: [17, 27, 8, 18, 19, 10],
      		backgroundColor: [
      		'#8BD47C',
      		'#8BD47C',
      		'#8BD47C',
          '#FFCE56',
          '#FFCE56',
          '#FFCE56'
      		],
      		hoverBackgroundColor: [
      		'#8BD47C',
      		'#8BD47C',
      		'#8BD47C',
          '#FFCE56',
          '#FFCE56',
          '#FFCE56'
      		]
      	}]
      },
      chartOptions: {
        rotation: 1 * Math.PI,
        circumference: 1 * Math.PI,
        legend: {
          display: false
        }
      }
    }
  }

  render() {
    return (
      <div className="box support">
        <h2>Apoyo de la lay en les Corts</h2>
        <div className="row">
          <div className="col-md-8">
            <div className="chart">
              <Doughnut data={this.state.chartData} options={this.state.chartOptions} />
              <div className="legend">Se necesitan <strong>66</strong> para aprobar la ley</div>
            </div>
            <div className="support-counter">
              <ul>
                <li className="yays"><span>54</span> A favor</li>
                <li className="abs"><span>45</span> Por determinar</li>
                <li className="nays"><span>0</span> En contra</li>
              </ul>
            </div>
          </div>
          <div className="col-md-4 support-info">
            <span className="glyphicon glyphicon-info-sign"></span>
            <p className="warning">A DÍA DE HOY LA LEY NO TIENE EL APOYO NECESÁRIO PARA SER APROBADA</p>
            <p>El Estatuto marca que para aprobar la ley electoral se necesita el voto de dos tercios de Les Corts. Esto significa 66 diputados y diputadas. No es un trabajo fácil, pero confiamos en convencer a esta amplia mayoría de la necesidad de contar con una ley electoral más avanzada, democrática, y participativa.</p>
          </div>
        </div>
      </div>
    );
  }
}

export default translate('Support')(Support);

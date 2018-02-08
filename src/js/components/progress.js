import React from 'react';
import { translate } from "react-translate";

import { Doughnut } from 'react-chartjs-2';

class Progress extends React.Component {

  constructor(){
    super();

    this.state = {
      chartData: {
      	labels: [
      		'Compromís',
      		'PSOE',
      		'Podemos',
          'Ciudadanos',
          'PP'
      	],
      	datasets: [{
          borderWidth: 5,
          hoverBorderColor: '#ccc',
      		data: [19, 23, 13, 13, 31],
      		backgroundColor: [
      		'#8BD47C',
      		'#8BD47C',
      		'#8BD47C',
          '#FFCE56',
          '#EA4E29'
      		],
      		hoverBackgroundColor: [
      		'#FF6384',
      		'#36A2EB',
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
      <div className="box progress">
        <h3>Header</h3>
        <div className="chart">
          <Doughnut data={this.state.chartData} options={this.state.chartOptions} />
        </div>
        <p>L’Estatut marca que per a aprovar la llei electoral es necessita el vot de dos terços de Les Corts. Això vol dir 66 diputats i diputades. No és un treball fàcil, però confiem en convèncer a esta àmplia majoria de la necessitat de comptar amb una llei electoral més avançada, democràtica, i participativa.</p>
      </div>
    );
  }
}

export default translate('Progress')(Progress);

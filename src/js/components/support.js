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
        <h2>Suport de la llei a les Corts</h2>
        <div className="row">
          <div className="col-md-8">
            <div className="chart">
              <Doughnut data={this.state.chartData} options={this.state.chartOptions} />
              <div className="legend">Es necessiten <strong>66</strong> per a aprovar la llei</div>
            </div>
            <div className="support-counter">
              <ul>
                <li className="yays"><span>54</span> A favor</li>
                <li className="abs"><span>45</span> Per determinar</li>
                <li className="nays"><span>0</span> En contra</li>
              </ul>
            </div>
          </div>
          <div className="col-md-4 support-info">
            <span className="glyphicon glyphicon-info-sign"></span>
            <p className="warning">A DIA DE HUI LA LLEI NO TÉ ELS SUPORTS NECESSARIS PER A SER APROVADA</p>
            <p>L’Estatut marca que per a aprovar la llei electoral es necessita el vot de dos terços de Les Corts. Això vol dir 66 diputats i diputades. No és un treball fàcil, però confiem en convèncer a esta àmplia majoria de la necessitat de comptar amb una llei electoral més avançada, democràtica, i participativa.</p>
          </div>
        </div>
      </div>
    );
  }
}

export default translate('Support')(Support);

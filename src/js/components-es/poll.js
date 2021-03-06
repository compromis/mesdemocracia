import React from 'react';
import { translate } from "react-translate";
import { merge } from 'lodash';

import { Doughnut, Bar, defaults } from 'react-chartjs-2';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

merge(defaults, {
  global: {
    defaultFontFamily: 'Compromis, Helvetica, sans-serif',
    maintainAspectRatio: false
  },
});

class Poll extends React.Component {

  constructor(){
    super();

    this.state = {
      overallChartData: {
        labels: [
          'Muy o bastante prioritario',
          'Ni mucho ni poco prioritario',
          'Poco o nada prioritario'
        ],
        datasets: [{
          borderWidth: 3,
          hoverBorderColor: '#ccc',
          data: [74.1, 5.6, 17.1],
          backgroundColor: [
            '#8BD47C',
            '#FFCE56',
            '#C65948'
          ],
          hoverBackgroundColor: [
            '#8BD47C',
            '#FFCE56',
            '#C65948'
          ]
        }]
      },

      ageChartData: {
        labels: [
          '16-24',
          '25-34',
          '35-44',
          '45-54',
          '55-64',
          '+65'
        ],
        datasets: [{
          label: 'Muy o bastante prioritario',
          borderWidth: 3,
          hoverBorderColor: '#ccc',
          data: [75.5, 71, 73.7, 77.7, 73.7, 72.5],
          backgroundColor: '#8BD47C',
          hoverBackgroundColor: '#8BD47C'
        },
        {
          label: 'Ni mucho ni poco prioritario',
          borderWidth: 3,
          hoverBorderColor: '#ccc',
          data: [4.5, 4.3, 9.6, 6.8, 1.5, 4.2],
          backgroundColor: '#FFCE56',
          hoverBackgroundColor: '#FFCE56'
        },
        {
          label: 'Poco o nada prioritario',
          borderWidth: 3,
          hoverBorderColor: '#ccc',
          data: [16.4, 23.1, 16.7, 14, 19.8, 15.5],
          backgroundColor: '#C65948',
          hoverBackgroundColor: '#C65948'
        }]
      },

      regionChartData: {
        labels: [
          'València',
          'Alacant',
          'Castelló'
        ],
        datasets: [{
          label: 'Muy o bastante prioritario',
          borderWidth: 3,
          hoverBorderColor: '#ccc',
          data: [70.7, 80.8, 70.4],
          backgroundColor: '#8BD47C',
          hoverBackgroundColor: '#8BD47C'
        },
        {
          label: 'Ni mucho ni poco prioritario',
          borderWidth: 3,
          hoverBorderColor: '#ccc',
          data: [7.1, 4, 3.4],
          backgroundColor: '#FFCE56',
          hoverBackgroundColor: '#FFCE56'
        },
        {
          label: 'Poco o nada prioritario',
          borderWidth: 3,
          hoverBorderColor: '#ccc',
          data: [18.3, 13.7, 21.1],
          backgroundColor: '#C65948',
          hoverBackgroundColor: '#C65948'
        }]
      },

      partyChartData: {
        labels: [
          'Compromís',
          'PP',
          'PSPV-PSOE',
          'Podemos',
          'Ciudadanos'
        ],
        datasets: [{
          label: 'Muy o bastante prioritario',
          borderWidth: 3,
          hoverBorderColor: '#ccc',
          data: [84.6, 58.7, 79.2, 73.5, 85.8],
          backgroundColor: '#8BD47C',
          hoverBackgroundColor: '#8BD47C'
        },
        {
          label: 'Ni mucho ni poco prioritario',
          borderWidth: 3,
          hoverBorderColor: '#ccc',
          data: [2.8, 7.7, 4.8, 16.5, 0],
          backgroundColor: '#FFCE56',
          hoverBackgroundColor: '#FFCE56'
        },
        {
          label: 'Poco o nada prioritario',
          borderWidth: 3,
          hoverBorderColor: '#ccc',
          data: [11.2, 31.8, 13.7, 3.5, 10.7],
          backgroundColor: '#C65948',
          hoverBackgroundColor: '#C65948'
        }]
      },

      chartOptions: {
        legend: {
          position: 'bottom'
        }
      }
    }
  }

  render() {
    return (
      <div className="box poll">
        <h2>Opinión de la ciudadanía</h2>
        <p className="poll__subtitle">
          ¿Cómo de prioritaria considera una reforma electoral que contemple listas desbloqueadas,
          es decir, que los ciudadanos tengan la capacidad de modificar las listas electorales?
        </p>
        <div className="row">
          <div className="col-md-12">
            <div className="chart">
                <Tabs>
                  <TabList>
                    <Tab>Total</Tab>
                    <Tab>Por edad</Tab>
                    <Tab>Por demarcación</Tab>
                    <Tab>Por partido</Tab>
                  </TabList>

                  <TabPanel>
                    <div className="chart__container">
                      <Doughnut data={this.state.overallChartData} options={this.state.chartOptions} />
                    </div>
                  </TabPanel>
                  <TabPanel>
                    <div className="chart__container">
                      <Bar data={this.state.ageChartData} options={this.state.chartOptions} />
                    </div>
                  </TabPanel>
                  <TabPanel>
                    <div className="chart__container">
                      <Bar data={this.state.regionChartData} options={this.state.chartOptions} />
                    </div>
                  </TabPanel>
                  <TabPanel>
                    <div className="chart__container">
                      <Bar data={this.state.partyChartData} options={this.state.chartOptions} />
                    </div>
                  </TabPanel>
                </Tabs>

                <hr />
                <div className="poll__small-text">
                  <strong>Fuente:</strong> Estudio interno 2017/ Metodología: Encuestas telefónicas asistidas por ordenador (CATI)
                    / Población: Personas de 16 años i más empadronados en municipios valencianos
                    / Tamaño de la muestra: 1.200 entrevistas
                    / Distribución: Variables cruzadas de tamaño del municipio, edad, sexo i situación laboral
                    / Margen de error para totaes +/- 2,77% (95% i p=q=0,5)
                </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default translate('Poll')(Poll);

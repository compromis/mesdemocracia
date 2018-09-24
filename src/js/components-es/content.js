import React from 'react';
import { translate } from "react-translate";

import {
    Accordion,
    AccordionItem,
    AccordionItemTitle,
    AccordionItemBody,
} from 'react-accessible-accordion';

class Content extends React.Component {

  render() {
    return (
      <div className="box main-content points">
        <h2>Las 10 claves de la reforma</h2>
        <h4>Ley Electoral presentada por Compromís, PSPV-PSOE y Podemos-Podem</h4>

        <Accordion accordion={false}>
          <AccordionItem>
            <AccordionItemTitle>
              <h3><span>1</span> Rebaja de la barrera electoral al 3% <div className="accordion__arrow" role="presentation" /></h3>
            </AccordionItemTitle>
            <AccordionItemBody>
              <p>La barrera electoral actual es del 5% de los votos emitidos (válidos + nulos) a nivel autonómico, siendo la más dura de todo el Estado con la única excepción de la de Canarias.</p>
              <ul>
                <li>Proponemos que la barrera electoral se rebaje al 3% de los votos válidos (sin contar los nulos) a nivel de circunscripción y en el conjunto de la Comunidad Valenciana.</li>
              </ul>
            </AccordionItemBody>
          </AccordionItem>

          <AccordionItem>
            <AccordionItemTitle>
              <h3><span>2</span> Listas cremallera <div className="accordion__arrow" role="presentation" /></h3>
            </AccordionItemTitle>
            <AccordionItemBody>
              <p>La actual Ley Electoral Valenciana no cuenta con ninguna medida de igualdad entre hombres y mujeres, y únicamente hay que cumplir la proporción 60-40 que marca la Ley Orgánica estatal 3/2007 para la igualdad efectiva de mujeres y hombres.</p>
              <ul>
                <li>Proponemos listas cremallera para garantizar la igualdad total en el acceso a la representación de hombres y mujeres.</li>
                <li>Las mujeres y hombres aparecerán ordenados alternativamente, correspondiendo los puestos impares a un sexo y los pares al otro hasta completar el número total de personas candidatas.</li>
                <li>Se blinda esta proporción del 50-50, incluso, con el voto preferencial ya que los candidatos de un determinado sexo sólo promoverán el lugar que ocupe el candidato o candidata de su mismo sexo.</li>
                <li>A los efectos de la ley, se considera válida la identidad de género expresada que sea acreditada por la Generalitat Valenciana de acuerdo con lo establecido en la Ley 8/2017, de 7 de abril, de la Generalitat, integral del reconocimiento del derecho a la identidad y la expresión de género en la Comunidad Valenciana.</li>
                <li>También se contempla la paridad en la composición de la Junta Electoral Valenciana.</li>
              </ul>
            </AccordionItemBody>
          </AccordionItem>

          <AccordionItem>
            <AccordionItemTitle>
              <h3><span>3</span> Voto preferencial, listas desbloqueadas <div className="accordion__arrow" role="presentation" /></h3>
            </AccordionItemTitle>
            <AccordionItemBody>
              <p>Queremos ser la primera comunidad autónoma que permita a la ciudadanía personalizar su voto en las próximas elecciones a Les Corts.</p>
              <ul>
                <li>El elector/a continuará votando la candidatura de una única formación pero tendrá la posibilidad, si así lo desea, de expresar su preferencia por un máximo de 3 candidatos o candidatas de esa lista a través de un voto categórico (con una cruz).</li>
                <li>Los candidatos o candidatas que cuentan con votos preferenciales que suponen el 10% del total de votos válidos obtenidos por su candidatura en la circunscripción promoverán dentro de la lista.</li>
                <li>Únicamente quedan excluidos los cabezas de lista y los suplentes.</li>
                <li>En caso de que el elector/a no exprese ninguna preferencia o engañe en el voto preferencial, el voto a la candidatura continuará siendo igualmente válido.</li>
              </ul>
            </AccordionItemBody>
          </AccordionItem>

          <AccordionItem>
            <AccordionItemTitle>
              <h3><span>4</span> Facilitar el voto de residentes en el extranjero <div className="accordion__arrow" role="presentation" /></h3>
            </AccordionItemTitle>
            <AccordionItemBody>
              <p>Los y las residentes en el extranjero deben tener garantizado que contarán con la documentación necesaria para votar. Aunque es el Estado quien tiene la competencia para modificar el "voto rogado", con la nueva ley electoral se puede facilitar este voto, especialmente en cuanto al retraso en la llegada de la documentación.</p>
              <ul>
                <li>Se pondrá a disposición de los electores/as residentes ausentes que viven en el extranjero los diferentes juegos de papeletas en formato electrónico de cada circunscripción para poder ser impresos y utilizados con total garantía.</li>
              </ul>
            </AccordionItemBody>
          </AccordionItem>

          <AccordionItem>
            <AccordionItemTitle>
              <h3><span>5</span> Primarias abiertas <div className="accordion__arrow" role="presentation" /></h3>
            </AccordionItemTitle>
            <AccordionItemBody>
              <p>Para fortalecer la democracia interna de los partidos se incentiva la realización de primarias abiertas a la ciudadanía, ayudando a sufragar los gastos que conlleva la realización de primarias.</p>
              <ul>
                <li>Se incrementará en un 5% el importe de la subvención electoral para aquellas candidaturas que acrediten, ante la Junta Electoral Valenciana, la utilización de un procedimiento de primarias abiertas a la ciudadanía que garantice un proceso democrático de concurrencia de candidaturas y la participación mediante voto directo para la elección de sus listas.</li>
              </ul>
            </AccordionItemBody>
          </AccordionItem>

          <AccordionItem>
            <AccordionItemTitle>
              <h3><span>6</span> Debates obligatorios en los medios públicos autonómicos <div className="accordion__arrow" role="presentation" /></h3>
            </AccordionItemTitle>
            <AccordionItemBody>
              <ul>
                <li>Se establece la obligatoriedad de la celebración de debates electorales en la televisión pública valenciana en horario de máxima audiencia.</li>
                <li>En estos debates no sólo participarán las candidaturas con representación en Les Corts sino también aquellas que hayan obtenido al menos el 3% de los votos válidos en otras elecciones celebradas desde entonces en el mismo ámbito territorial (generales o europeas)</li>
              </ul>
            </AccordionItemBody>
          </AccordionItem>

          <AccordionItem>
            <AccordionItemTitle>
              <h3><span>7</span> Distribución proporcional de espacios electorales <div className="accordion__arrow" role="presentation" /></h3>
            </AccordionItemTitle>
            <AccordionItemBody>
              <p>La distribución del tiempo gratuito de propaganda electoral en cada medio de comunicación de radio y televisión de titularidad pública, y en los diferentes ámbitos de programación que estos tengan, se realizará de forma proporcional a la representación obtenida en Les Corts, garantizando 5 minutos para cada formación sin representación en Les Corts.</p>
            </AccordionItemBody>
          </AccordionItem>

          <AccordionItem>
            <AccordionItemTitle>
              <h3><span>8</span> Envío electoral postal unificado <div className="accordion__arrow" role="presentation" /></h3>
            </AccordionItemTitle>
            <AccordionItemBody>
              <ul>
                <li>Se prevé el envío centralizado de papeletas y publicidad de las diferentes candidaturas para ahorrar recursos económicos a la administración y conseguir un menor impacto en el medio ambiente.</li>
                <li>En este reparto no sólo entrarían las candidaturas que suelen realiza mailing (aquellas con representación en Les Corts) sino también las que hayan obtenido al menos el 3% de los votos válidos en otras elecciones celebradas desde la última convocatoria a Les Corts en el mismo ámbito territorial (generales o europeas).</li>
                <li>El mailing unificado se realizará en caso de elecciones a Les Corts no concurrentes con otras elecciones, ya que en ese caso el envío debe ser sufragado, por ley, por el Estado y se debe evitar un doble gasto a la administración valenciana.</li>
              </ul>
            </AccordionItemBody>
          </AccordionItem>

          <AccordionItem>
            <AccordionItemTitle>
              <h3><span>9</span> Nuevas incompatibilidades para ser diputado/a <div className="accordion__arrow" role="presentation" /></h3>
            </AccordionItemTitle>
            <AccordionItemBody>
              <p>En la línea de lo que establece la normativa de otros territorios y el informe del Observatorio, modificamos las incompatibilidades:</p>
              <ul>
                <li>Será incompatible el ejercicio como diputados o diputadas para los miembros de las corporaciones locales, integrantes de los gabinetes de miembros del Consell, personas que ostentan la presidencia o dirección general de una Caja de Ahorro o titulares de autoridades portuarias para nombramiento de la Generalitat.</li>
              </ul>
            </AccordionItemBody>
          </AccordionItem>

          <AccordionItem>
            <AccordionItemTitle>
              <h3><span>10</span> Adaptación al Estatuto de 2006 <div className="accordion__arrow" role="presentation" /></h3>
            </AccordionItemTitle>
            <AccordionItemBody>
              <ul>
                <li>Se adapta la ley en el Estatuto de 2006 regulando la disolución anticipada de Les Corts y las denominaciones estatutarias.</li>
              </ul>
            </AccordionItemBody>
          </AccordionItem>
        </Accordion>

        <div className="full-text">
          <a href="/files/llei.pdf">Texto completo de la Propuesta de Ley</a>
        </div>
      </div>
    );
  }
}

export default translate('Content')(Content);

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
        <h2>Les 10 claus de la reforma</h2>
        <h4>Llei Electoral presentada per Compromís, PSPV-PSOE i Podemos-Podem</h4>

        <Accordion accordion={false}>
          <AccordionItem>
            <AccordionItemTitle>
              <h3><span>1</span> Rebaixa barrera electoral al 3% <div className="accordion__arrow" role="presentation" /></h3>
            </AccordionItemTitle>
            <AccordionItemBody>
              <p>La barrera electoral actual és del 5% dels vots emesos (vàlids+nuls) a nivell autonòmic, sent la més dura de tot l’Estat amb l’única excepció de la de Canàries.</p>
              <ul>
                <li>Proposem que la barrera electoral es rebaixe al 3% dels vots vàlids (sense comptar els nuls) a nivell de circumscripció i en el conjunt de la Comunitat Valenciana.</li>
              </ul>
            </AccordionItemBody>
          </AccordionItem>

          <AccordionItem>
            <AccordionItemTitle>
              <h3><span>2</span> Llistes cremallera <div className="accordion__arrow" role="presentation" /></h3>
            </AccordionItemTitle>
            <AccordionItemBody>
              <p>L’actual llei electoral valenciana no compta amb cap mesura d’igualtat entre homes i dones, i únicament cal complir la proporció 60-40 que marca la Llei Orgànica estatal 3/2007 per a la igualtat efectiva de dones i homes.</p>
              <ul>
                <li>Proposem llistes cremallera per a garantir la igualtat total en l’accés a la representació d’homes i dones.</li>
                <li>Les dones i homes apareixeran ordenats alternativament, corresponent els llocs imparells a un sexe i els parells a l'altre fins a completar el nombre total de persones candidates.</li>
                <li>Es blinda esta proporció del 50-50, fins i tot, amb el vot preferencial ja que les persones candidates d’un determinat sexe només promouran al lloc que ocupe el candidat o candidata del seu mateix sexe.</li>
                <li>Als efectes de la llei, es considera vàlida la identitat de gènere expressada que siga acreditada per la Generalitat Valenciana d'acord amb el que estableix la Llei 8/2017, de 7 d'abril, de la Generalitat, integral del reconeixement del dret a la identitat i a l'expressió de gènere a la Comunitat Valenciana.</li>
                <li>També es contempla la paritat en la composició de la Junta Electoral Valenciana.</li>
              </ul>
            </AccordionItemBody>
          </AccordionItem>

          <AccordionItem>
            <AccordionItemTitle>
              <h3><span>3</span> Vot preferencial, llistes desbloquejades <div className="accordion__arrow" role="presentation" /></h3>
            </AccordionItemTitle>
            <AccordionItemBody>
              <p>Volem ser la primera comunitat autònoma que permeta a la ciutadania personalitzar el seu vot en les pròximes eleccions a Les Corts.</p>
              <ul>
                <li>L’elector/a continuarà votant la candidatura d’una única formació però tindrà la possibilitat, si així ho desitja, d’expressar la seua preferència per un màxim de 3 candidats o candidates d’eixa llista a través d’un vot categòric (amb una creueta).</li>
                <li>Els candidats o candidates que compten amb vots preferencials que suposen el 10% del total de vots vàlids obtinguts per la seua candidatura en la circumscripció promouran dins de la llista.</li>
                <li>Únicament queden exclosos els caps de llista i els suplents.</li>
                <li>En cas de que l’elector no expresse cap preferència o s’enganye en el vot preferencial, el vot a la candidatura continuarà sent igualment vàlid.</li>
              </ul>
            </AccordionItemBody>
          </AccordionItem>

          <AccordionItem>
            <AccordionItemTitle>
              <h3><span>4</span> Facilitar vot de residents a l'estranger <div className="accordion__arrow" role="presentation" /></h3>
            </AccordionItemTitle>
            <AccordionItemBody>
              <p>Els i les residents a l’estranger han de tindre garantit que comptaran amb la documentació necessària per a votar. Tot i que és l’Estat és qui té la competència per modificar el “vot pregat”, amb la nova llei electoral es pot facilitar este vot, especialment pel que fa al retard en l’arribada de la documentació.</p>
              <ul>
                <li>Es posarà a disposició dels electors residents absents que viuen en l'estranger els diferents jocs de paperetes en format electrònic de cada circumscripció per poder ser impresos i utilitzats amb total garantia per part dels electors i electores residents a l’estranger.</li>
              </ul>
            </AccordionItemBody>
          </AccordionItem>

          <AccordionItem>
            <AccordionItemTitle>
              <h3><span>5</span> Primàries obertes <div className="accordion__arrow" role="presentation" /></h3>
            </AccordionItemTitle>
            <AccordionItemBody>
              <p>Per a enfortir la democràcia interna dels partits s’incentiva la realització de primàries obertes a la ciutadania, ajudant a sufragar els gestos que comporta la realització de primàries.</p>
              <ul>
                <li>S’incrementarà en un 5 % l’import de la subvenció electoral per a aquelles candidatures que acrediten, davant la Junta Electoral Valenciana, la utilització d’un procediment de primàries obertes a la ciutadania que garantisca un procés democràtic de concurrència de candidatures i la participació mitjançant vot directe per a l'elecció de les seues llistes.</li>
              </ul>
            </AccordionItemBody>
          </AccordionItem>

          <AccordionItem>
            <AccordionItemTitle>
              <h3><span>6</span> Debats obligatoris als mitjans públics autonòmics <div className="accordion__arrow" role="presentation" /></h3>
            </AccordionItemTitle>
            <AccordionItemBody>
              <ul>
                <li>S’estableix l’obligatorietat de la celebració de debats electorals en la televisió pública valenciana en horari de màxima audiència.</li>
                <li>En estos debats no només participaran les candidatures amb representació a Les Corts sinó també aquelles que hagen obtingut almenys el 3 % dels vots vàlids en altres eleccions celebrades des de llavors en el mateix àmbit territorial (generals o europees)</li>
              </ul>
            </AccordionItemBody>
          </AccordionItem>

          <AccordionItem>
            <AccordionItemTitle>
              <h3><span>7</span> Distribució proporcional d’espais electorals <div className="accordion__arrow" role="presentation" /></h3>
            </AccordionItemTitle>
            <AccordionItemBody>
              <p>La distribució del temps gratuït de propaganda electoral en cada mitjà de comunicació de ràdio i televisió de titularitat pública, i en els diferents àmbits de programació que aquests tinguen, es realitzarà de forma proporcional a la representació obtinguda en Les Corts, garantint 5 minuts per a cada formació sense representació a Les Corts.</p>
            </AccordionItemBody>
          </AccordionItem>

          <AccordionItem>
            <AccordionItemTitle>
              <h3><span>8</span> Enviaments electorals postals unificats <div className="accordion__arrow" role="presentation" /></h3>
            </AccordionItemTitle>
            <AccordionItemBody>
              <ul>
                <li>Es preveu l’enviament centralitzat de paperetes i publicitat de les diferents candidatures per estalviar recursos econòmics a l’administració i aconseguir un menor impacte en medi ambient.</li>
                <li>En este repartiment no només entrarien les candidatures que solen realitzar mailing (aquelles amb representació a Les Corts) sinó també les que hagen obtingut almenys el 3 % dels vots vàlids en altres eleccions celebrades des de l’última convocatòria a Les Corts en el mateix àmbit territorial (generals o europees).</li>
                <li>El mailing unificat es realitzarà en cas d’eleccions a Les Corts no concurrents amb altres eleccions ja que en eixe cas l’enviament ha de ser sufragat, per llei, per l’Estat i s’ha d’evitar una doble despesa a l’administració valenciana.</li>
              </ul>
            </AccordionItemBody>
          </AccordionItem>

          <AccordionItem>
            <AccordionItemTitle>
              <h3><span>9</span> Noves incompatibilitats per a ser diputats/des <div className="accordion__arrow" role="presentation" /></h3>
            </AccordionItemTitle>
            <AccordionItemBody>
              <p>En la línia del que estableix la normativa d’altres territoris i l’informe de l’Observatori, modifiquem les incompatibilitats:</p>
              <ul>
                <li>Serà incompatible l’exercici com a diputats o diputades per als membres de les corporacions locals, integrants dels gabinets de membres del Consell, persones que ostenten la presidència o direcció general d’una Caixa d’Estalvi o titulars d’autoritats portuàries per nomenament de la Generalitat.</li>
              </ul>
            </AccordionItemBody>
          </AccordionItem>

          <AccordionItem>
            <AccordionItemTitle>
              <h3><span>10</span> Adaptació a l'Estatut de 2006 <div className="accordion__arrow" role="presentation" /></h3>
            </AccordionItemTitle>
            <AccordionItemBody>
              <ul>
                <li>S’adapta la llei a l’Estatut de 2006 regulant la dissolució avançada de Les Corts i les denominacions estatutàries.</li>
              </ul>
            </AccordionItemBody>
          </AccordionItem>
        </Accordion>

        <div className="full-text">
          <a href="/files/llei.pdf">Text complet de la Proposta de Llei</a>
        </div>
      </div>
    );
  }
}

export default translate('Content')(Content);

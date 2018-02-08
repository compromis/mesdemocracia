import React from 'react';
import { translate } from "react-translate";

class Placeholder extends React.Component {

  render() {
    return (
      <div className="box progress">
        <h3>Placeholder</h3>
        <p>Lorem ipsum</p>
      </div>
    );
  }
}

export default translate('Placeholder')(Placeholder);

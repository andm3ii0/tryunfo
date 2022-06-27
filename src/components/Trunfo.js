import React from 'react';
import PropTypes from 'prop-types';

class Trunfo extends React.Component {
  render() {
    const { cardTrunfo, onInputChange } = this.props;
    return (
      <label htmlFor="trunfo">
        Super trunfo
        <input
          type="checkbox"
          data-testid="trunfo-input"
          name="cardTrunfo"
          id="trunfo"
          checked={ cardTrunfo }
          onChange={ onInputChange }
        />
      </label>);
  }
}

Trunfo.propTypes = {
  cardTrunfo: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
};

export default Trunfo;

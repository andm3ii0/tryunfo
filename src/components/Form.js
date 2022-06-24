import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick } = this.props;
    return (
      <form>
        <label htmlFor="nome">
          nome
          <input
            type="text"
            data-testid="name-input"
            name="nome"
            id="nome"
            value={ cardName }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="descricao">
          Deascrição
          <input
            type="textarea"
            data-testid="description-input"
            name="deacricao"
            id="descricao"
            value={ cardDescription }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="atack">
          Ataque
          <input
            type="number"
            data-testid="attr1-input"
            name="atack"
            id="atack"
            value={ cardAttr1 }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="deff">
          Defesa
          <input
            type="number"
            data-testid="attr2-input"
            name="defesa"
            id="deff"
            value={ cardAttr2 }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="life">
          Vida
          <input
            type="number"
            data-testid="attr3-input"
            name="life"
            id="life"
            value={ cardAttr3 }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="img">
          Imagem
          <input
            type="text"
            data-testid="image-input"
            name="image"
            id="img"
            value={ cardImage }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="rare">
          Raridade
          <select
            data-testid="rare-input"
            name="rare"
            id="rare"
            value={ cardRare }
            onChange={ onInputChange }
          >
            <option value="normal" selected>normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>

        <label htmlFor="trunfo">
          Super trunfo
          <input
            type="checkbox"
            data-testid="trunfo-input"
            name="trunfo"
            id="trunfo"
            checked={ cardTrunfo }
            onChange={ onInputChange }
          />
        </label>

        <button
          type="submit"
          data-testid="save-button"
          id="submit"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
        >
          Salvar

        </button>

      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};
export default Form;

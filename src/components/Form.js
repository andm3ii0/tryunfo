import React from 'react';
import PropTypes from 'prop-types';
import Trunfo from './Trunfo';

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
      hasTrunfo,
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
            name="cardName"
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
            name="cardDescription"
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
            name="cardAttr1"
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
            name="cardAttr2"
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
            name="cardAttr3"
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
            name="cardImage"
            id="img"
            value={ cardImage }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="rare">
          Raridade
          <select
            data-testid="rare-input"
            name="cardRare"
            id="rare"
            value={ cardRare }
            onChange={ onInputChange }
          >
            <option value="normal" selected>normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>

        {!hasTrunfo
          ? <Trunfo cardTrunfo={ cardTrunfo } onInputChange={ onInputChange } />
          : <p>Você já tem um Super Trunfo em seu baralho</p>}

        <button
          type="reset"
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
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};
export default Form;

import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="nome">
          nome
          <input type="text" data-testid="name-input" name="nome" id="nome" />
        </label>

        <label htmlFor="descricao">
          Deascrição
          <input
            type="textarea"
            data-testid="description-input"
            name="deacricao"
            id="descricao"
          />
        </label>

        <label htmlFor="atack">
          Ataque
          <input type="number" data-testid="attr1-input" name="atack" id="atack" />
        </label>

        <label htmlFor="deff">
          Defesa
          <input type="number" data-testid="attr2-input" name="defesa" id="deff" />
        </label>

        <label htmlFor="life">
          Vida
          <input type="number" data-testid="attr3-input" name="life" id="life" />
        </label>

        <label htmlFor="img">
          Imagem
          <input type="text" data-testid="image-input" name="image" id="img" />
        </label>

        <label htmlFor="rare">
          Raridade
          <select data-testid="rare-input" name="rare" id="rare">
            <option value="normal" selected>normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>

        <label htmlFor="trunfo">
          Super trunfo
          <input type="checkbox" data-testid="trunfo-input" name="trunfo" id="trunfo" />
        </label>

        <button type="submit" data-testid="save-button" id="submit">Salvar</button>

      </form>
    );
  }
}

export default Form;

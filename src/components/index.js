const validaObj = (receiveObj) => {
  const defaultObj = {
    cardName: '',
    cardDescription: '',
    cardAttr1: '',
    cardAttr2: '',
    cardAttr3: '',
    cardImage: '',
    cardRare: '',
  };

  const aProps = Object.getOwnPropertyNames(receiveObj);
  const bProps = Object.getOwnPropertyNames(defaultObj);

  if (aProps.length !== bProps.length) {
    return false;
  }

  for (let i = 0; i < aProps.length; i += 1) {
    const propName = aProps[i];

    if (receiveObj[propName] === defaultObj[propName]) {
      return false;
    }
  }
  return true;
};

const validaAttr = (a, b, c) => {
  const limit1 = 90;
  const limit2 = 210;
  const somaAttr = Number.parseInt(a, 10)
  + Number.parseInt(b, 10) + Number.parseInt(c, 10);

  if (Number.parseInt(a, 10) > limit1 || Number.parseInt(a, 10) < 0) {
    console.log(Number.parseInt(a, 10));
    return false;
  }
  if (Number.parseInt(b, 10) > limit1 || Number.parseInt(b, 10) < 0) {
    console.log(Number.parseInt(b, 10));
    return false;
  }
  if (Number.parseInt(c, 10) > limit1 || Number.parseInt(c, 10) < 0) {
    console.log(Number.parseInt(c, 10));
    return false;
  }
  if (somaAttr > limit2) {
    console.log(somaAttr);
    return false;
  }
  return true;
};

function validaBotao(obj) {
  const {
    cardName,
    cardDescription,
    cardAttr1,
    cardAttr2,
    cardAttr3,
    cardImage,
    cardRare,
  } = obj;

  const receiveObj = {
    cardName,
    cardDescription,
    cardAttr1,
    cardAttr2,
    cardAttr3,
    cardImage,
    cardRare,
  };

  return !(validaObj(receiveObj) && validaAttr(cardAttr1, cardAttr2, cardAttr3));
}

export default validaBotao;

// aqui vai o código que acessa o banco de dados

const getExample = (req, res) => {
  console.log('você também pode utilizar o console para visualizar =)');
  res.send('Request getExample feita');
};

const getOtherExample = (req, res) => {
  console.log('outro console =)');
  res.send('Request getOtherExample feita');
};

const teste = (req, res) => {
  res.send('Request >teste< feito');
}

module.exports = { getExample, getOtherExample, teste };

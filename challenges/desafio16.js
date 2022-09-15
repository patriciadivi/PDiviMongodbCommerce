db.produtos.updateOne(
  {
      nome: { $eq: "Big Mac" },
  }, { $set: { ultimaModificacao: new Date() } },
);
db.produtos.find({ ultimaModificacao: { $exists: true } },
{ _id: 0, nome: 1 });

// Adicione o campo ultimaModificacao
// com a data corrente somente no sanduíche Big Mac
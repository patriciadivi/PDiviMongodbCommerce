db.produtos.find(
  { tags: { $not: { $exists: true } }, vendidos: { $nin: [50] } },
  { _id: 0, nome: 1, vendidos: 1 },
);

// Retorne o nome e vendidos dos lanches
// que tenham sido vendidos com uma quantidade diferente de 50 e em que o campo tags não exista
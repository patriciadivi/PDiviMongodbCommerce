db.produtos.find(
  { ingredientes: { $in: ["picles"] } },
  { _id: 0, nome: 1, ingredientes: 1, valoresNutricionais: { $slice: 3 } },
);

// Segunda forma
// db.produtos.find(
//   { ingredientes: { $elemMatch: { $eq: "picles" } } },
//   { _id: 0, nome: 1, ingredientes: 1, valoresNutricionais: { $slice: 3 } },
// );

// Crie uma query que retorne todos os lanches
// que possuem picles em seus ingredientese mostre apenas os
// 3 primeiros itens contidos no array valoresNutricionais

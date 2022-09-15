db.produtos.updateMany(
  {},
  { $pull: { ingredientes: "cebola" } },
);
db.produtos.find(
  {},
  { _id: 0, nome: 1, ingredientes: 1 },
  );

// tirar a duvida porque não funciono
// db.produtos.deleteMany(
//   { ingredientes: { $elemMatch: { $eq: "cebola" } } },
// );
// db.produtos.find({},
//   { _id: 0, nome: 1, ingredientes: 1 });

// Remova o item cebola de todos os sanduíches
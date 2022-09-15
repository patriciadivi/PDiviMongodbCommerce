db.produtos.updateMany(
  {
    nome: { $in: ["Big Mac", "Quarteirão com Queijo"] },
  }, { $addToSet: { ingredientes: "bacon" } },
);
db.produtos.find(
  {}, 
  { _id: 0, nome: 1, ingredientes: 1 },
);
// Inclua bacon no final da lista de ingredientes
// dos sanduíches Big Mac e Quarteirão com Queijo
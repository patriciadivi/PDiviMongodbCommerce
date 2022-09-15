db.produtos.updateOne(
  { nome: "Quarteirão com Queijo" },
  { $pop: { ingredientes: -1 } },
);
db.produtos.find(
  {},
  { _id: 0, nome: 1, ingredientes: 1 },
);

// Remova o primeiro ingrediente do sanduíche Quarteirão com Queijo
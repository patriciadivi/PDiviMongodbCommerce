db.produtos.updateMany(
  {
      nome: { $nin: ["McChicken"] },
  }, { $addToSet: { ingredientes: "ketchup" } },
);
db.produtos.find({}, { _id: 0, nome: 1, ingredientes: 1 });

// Adicione ketchup aos ingredientes
// para todos os sanduíchesmenos o McChicken,
// garantindo que não haja duplicidade nos ingredientes
db.produtos.updateMany(
  { 
    valoresNutricionais: { 
      $elemMatch: 
      { tipo: "sódio", percentual: { $gte: 40 } },
    },
  },
  { $addToSet: { tags: "muito sódio" } },
);
db.produtos.find({}, { _id: 0, nome: 1, tags: 1 });

// Adicione o valor muito sódio ao final do array tags
// nos produtos em que o percentual de sódio seja maior
// ou igual a 40
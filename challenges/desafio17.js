db.resumoProdutos.insertOne(
  { 
    franquia: "McDonalds",
    totalProdutos: db.produtos.find().count(),
  },
);
db.resumoProdutos.find(
  {}, { _id: 0, franquia: 1, totalProdutos: 1 },
);

// Retorne a quantidade total de produtos
// em uma nova coleção chamada resumoProdutos
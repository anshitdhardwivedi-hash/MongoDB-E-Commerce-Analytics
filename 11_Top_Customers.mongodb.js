use("ecommerce")

db.orders.aggregate([
  {
    $unwind: "$products"
  },
  {
    $group: {
      _id: "$customer",
      TotalSpent: {
        $sum: {
          $multiply: [
            "$products.quantity",
            "$products.price"
          ]
        }
      }
    }
  },
  {
    $sort: {
      TotalSpent: -1
    }
  },
  {
    $limit: 5
  }
])
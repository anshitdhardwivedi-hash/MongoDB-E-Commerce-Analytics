use("ecommerce")

db.orders.aggregate([
  {
    $unwind: "$products"
  },
  {
    $group: {
      _id: "$products.name",
      TotalSold: {
        $sum: "$products.quantity"
      }
    }
  },
  {
    $sort: {
      TotalSold: -1
    }
  }
])
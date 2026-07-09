use("ecommerce")

db.orders.aggregate([
  {
    $unwind: "$products"
  },
  {
    $group: {
      _id: null,
      TotalRevenue: {
        $sum: {
          $multiply: [
            "$products.quantity",
            "$products.price"
          ]
        }
      }
    }
  }
])
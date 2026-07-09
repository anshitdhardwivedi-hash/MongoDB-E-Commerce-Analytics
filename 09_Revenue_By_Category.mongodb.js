use("ecommerce")

db.orders.aggregate([
  {
    $unwind: "$products"
  },
  {
    $group: {
      _id: "$products.category",
      Revenue: {
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
      Revenue: -1
    }
  }
])
use("ecommerce")

db.orders.aggregate([
  {
    $unwind: "$products"
  },
  {
    $group: {
      _id: "$orderId",
      OrderValue: {
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
    $group: {
      _id: null,
      AverageOrderValue: {
        $avg: "$OrderValue"
      }
    }
  }
])


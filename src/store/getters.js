
export default {
  // 购物车中food的数量
  totalCount (state) {
    return state.cartFoods.reduce((pre, food) => pre + food.count, 0)
  },

  //购物车中food的总价格
  totalPrice (state) {
    return state.cartFoods.reduce((pre, food) => pre + food.count*food.price, 0)
  },

  //评价的总数量
  ratingsCount (state) {
    return state.ratings.length
  },

  //满意评价的总数量
  positiveRatingsCount (state) {
    return state.ratings.reduce((pre,rating) => pre + (rating.rateType===0 ? 1 : 0), 0)
  }
}
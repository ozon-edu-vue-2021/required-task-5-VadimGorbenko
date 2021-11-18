export default {
  namespaced: true,
  state: () => ({
    cart: {},
  }),
  mutations: {
    addToCart(state, product) {
      state.cart = Object.assign({}, state.cart, {
        [product.uid]: {
          uid: product.uid,
          product: product,
          quantity: 1,
        },
      });
    },
    removeFromCart(state, productUID) {
      const newCart = { ...state.cart };
      delete newCart[productUID];
      state.cart = Object.assign({}, newCart);
    },
    setQuantity(state, { uid, quantity }) {
      state.cart[uid].quantity = quantity;
    },
  },
  actions: {
    add({ commit, state }, product) {
      if (state.cart[product.uid]) {
        commit("setQuantity", {
          uid: product.uid,
          quantity: state.cart[product.uid].quantity + 1,
        });
      } else {
        commit("addToCart", product);
      }
    },
  },
  getters: {
    cartItems: (state) => {
      return Object.values(state.cart);
    },
    totalCost: (state, getters) => {
      return getters.cartItems.reduce((acc, i) => {
        acc += i.product.price * i.quantity;
        return acc;
      }, 0);
    },
    totalPositions: (state, getters) => {
      return getters.cartItems.length;
    },
    totalProducts: (state, getters) => {
      return getters.cartItems.reduce((acc, i) => {
        acc += i.quantity;
        return acc;
      }, 0);
    },
  },
};

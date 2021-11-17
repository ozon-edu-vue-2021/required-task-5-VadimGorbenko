const images = [
  "6148226736.webp",
  "6123150777.webp",
  "6126039472.webp",
  "6126040354.webp",
  "6128597660.webp",
  "6134992334.webp",
  "6136170572.webp",
  "6136172483.webp",
  "6140906765.webp",
  "6142673815.webp",
  "6142681673.webp",
  "6142683276.webp",
];

function getRandomNumber(n) {
  return Math.floor(Math.random() * (n + 1));
}

function getRandomImage() {
  return images[getRandomNumber(images.length - 1)];
}

export default {
  namespaced: true,
  state: () => ({
    items: [],
  }),
  mutations: {
    storeProducts(state, payload) {
      state.items = payload;
    },
  },
  actions: {
    get({ commit }) {
      fetch("https://random-data-api.com/api/food/random_food?size=30")
        .then((r) => r.json())
        .then((data) => {
          const products = data.map((i) => {
            i.image = getRandomImage();
            i.price = getRandomNumber(1000);
            return i;
          });
          commit("storeProducts", products);
        })
        .catch(console.error);
    },
  },
};

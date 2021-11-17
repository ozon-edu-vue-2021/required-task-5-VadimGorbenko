<template>
  <div class="product-card">
    <h3 class="product-card__title">{{ product.dish }}</h3>
    <p class="product-card__price">{{ product.price }} руб.</p>
    <img
      :src="getImagePath(product.image)"
      class="product-card__image"
      alt="текст, описывающий что изображено на картинке товара"
    />
    <p class="product-card__description">{{ product.description }}</p>
    <o-button
      class="product-card__add-to-cart"
      @click="onAddToCartClick"
      :aria-label="`Добавить в корзину ${product.dish} за ${product.price} рублей`"
    >
      В корзину
    </o-button>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "ProductCard",
  components: {
    OButton: () => import("@/components/OButton"),
  },
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  methods: {
    ...mapActions({
      addToCart: "cart/add",
    }),
    getImagePath(path) {
      return require(`../assets/images/${path}`);
    },
    onAddToCartClick() {
      this.addToCart(this.product);
    },
  },
};
</script>

<style scoped>
.product-card {
  border: 2px solid #0490da;
  border-radius: 4px;
  max-width: 450px;
  padding: 16px;
  display: flex;
  flex-direction: column;
}

.product-card__title {
  order: 1;
}

.product-card__price {
  order: 4;
}

.product-card__image {
  width: 100%;
  max-width: 100%;
  order: 0;
}

.product-card__description {
  order: 2;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
}

.product-card__add-to-cart {
  order: 5;
  margin-top: auto;
}
</style>

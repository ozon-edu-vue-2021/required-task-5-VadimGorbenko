<template>
  <div class="cart-product-card">
    <h3 class="cart-product-card__title">{{ product.dish }}</h3>
    <p class="cart-product-card__price">{{ product.price }} руб.</p>
    <img
      :src="getImagePath(product.image)"
      class="cart-product-card__image"
      alt="текст, описывающий что изображено на картинке товара"
    />
    <label class="cart-product-card__quantity">
      Количество:
      <input
        type="number"
        :value="cartItem.quantity"
        min="1"
        @change="onChangeProductQuantity"
      />
    </label>
    <o-button
      class="cart-product-card__remove"
      @click="onRemoveClick"
      :aria-label="`Удалить из корзины ${product.dish} за ${product.price} рублей`"
    >
      Убрать из корзины
    </o-button>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "CartProductCard",
  components: {
    OButton: () => import("@/components/OButton"),
  },
  props: {
    cartItem: {
      type: Object,
      required: true,
    },
  },
  computed: {
    product() {
      return this.cartItem.product;
    },
  },
  methods: {
    ...mapMutations({
      addToCart: "cart/setQuantity",
      removeFromCart: "cart/removeFromCart",
    }),
    getImagePath(path) {
      return require(`../assets/images/${path}`);
    },
    onChangeProductQuantity($evt) {
      this.addToCart({
        uid: this.product.uid,
        quantity: Number($evt.target.value),
      });
    },
    onRemoveClick() {
      this.removeFromCart(this.product.uid);
    },
  },
};
</script>

<style scoped>
.cart-product-card {
  border: 4px solid #0490da;
  border-radius: 4px;
  padding: 16px;
  display: grid;
  grid-template-areas:
    "image title title"
    "image quantity price"
    "image remove remove";
  align-items: start;
  justify-content: start;
  grid-gap: 20px;
}

.cart-product-card__title {
  grid-area: title;
}

.cart-product-card__price {
  grid-area: price;
  margin: 0;
}

.cart-product-card__quantity {
  grid-area: quantity;
  display: flex;
  flex-direction: column;
}

.cart-product-card__image {
  grid-area: image;
  height: 250px;
}

.cart-product-card__remove {
  grid-area: remove;
}
</style>

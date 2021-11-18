<template>
  <div>
    <h1>Random api cart</h1>
    <router-link :to="{ name: 'home' }">В каталог</router-link>
    <div class="cart">
      <div class="cart__list">
        <cart-product-card
          v-for="item in cartItems"
          :key="item.product.uid"
          :cart-item="item"
        />
      </div>
      <div class="cart__sidebar">
        <output>
          Вы покупаете {{ totalProducts }} товаров по
          {{ totalPositions }} позициям, на общую сумму:
          <strong>{{ totalCost }}</strong
          >&nbsp;рублей.
        </output>
        <o-button class="cart__make-order" @click="onMakeOrderClick">
          Оформить
        </o-button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Cart",
  components: {
    CartProductCard: () => import("@/components/CartProductCard"),
    OButton: () => import("@/components/OButton"),
  },

  computed: {
    ...mapGetters({
      cartItems: "cart/cartItems",
      totalCost: "cart/totalCost",
      totalProducts: "cart/totalProducts",
      totalPositions: "cart/totalPositions",
    }),
  },
  methods: {
    onMakeOrderClick() {
      alert(
        this.cartItems
          .map((i) => `${i.product.dish} - ${i.quantity}шт`)
          .join("\n")
      );
    },
  },
};
</script>

<style scoped>
.cart {
  display: flex;
  align-items: flex-start;
  padding-top: 20px;
}

.cart__sidebar {
  width: 300px;
  flex-shrink: 0;
  border: 4px solid #fe0079;
  border-radius: 4px;
  padding: 8px;
  position: sticky;
  top: 0;
}

.cart__list {
  flex-grow: 1;
  margin-right: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
}
</style>

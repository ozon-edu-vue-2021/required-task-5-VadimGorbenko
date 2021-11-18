<template>
  <div>
    <h1>Random api shop</h1>
    <router-link :to="{ name: 'cart' }">
      В корзину ({{ totalProducts }} товаров)
    </router-link>
    <div class="grid">
      <product-card
        v-for="product in products"
        :key="product.id"
        :product="product"
      />
    </div>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from "vuex";

export default {
  name: "Home",
  components: {
    ProductCard: () => import("@/components/ProductCard"),
  },
  created() {
    if (this.products.length === 0) {
      this.fetchProducts();
    }
  },
  methods: {
    ...mapActions({
      fetchProducts: "products/get",
    }),
  },
  computed: {
    ...mapState({
      products: (state) => state.products.items,
    }),
    ...mapGetters({
      totalProducts: "cart/totalProducts",
    }),
  },
};
</script>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 16px;
  max-width: 1200px;
  margin: 0 auto;
}
</style>

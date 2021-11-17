<template>
  <button class="o-button" @click="$emit('click')">
    <slot />
  </button>
</template>

<script>
export default {
  name: "OButton",
};
</script>

<style scoped>
.o-button {
  padding: 8px 12px;
  border-radius: 4px;
  background-color: #fe0079;
  border: none;
  color: white;
}

.o-button:hover,
.o-button:focus {
  background-color: #b70050;
}

.o-button:active {
  box-shadow: inset 0px 0px 20px 0px #0490da;
}
</style>

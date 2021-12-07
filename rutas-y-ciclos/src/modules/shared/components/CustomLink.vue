<template>
  <router-link
    :to="route"
    v-slot="{ isActive }"
  >
    <a :class="isActive ? 'is-active' : 'normal-link'">
      {{ link.name }}
    </a>
  </router-link>
</template>

<script>
export default {
  props: {
    link: {
      type: Object,
      required: true,
    },
  },
  computed: {
    route() {
      return this.link.id
        ? { name: this.link.to, params: {pokemonId: this.link.id} }
        : { name: this.link.to };
    },
  },
};
</script>

<style scoped>
.is-active {
  color: #42b983;
}

.normal-link {
  color: #c6c5c5;
}
</style>
<template>
  <h1>Counter</h1>
  <h3>Data access: {{ $store.state.count }}</h3>
  <h3>Computed Data access: {{ countComputed }}</h3>
  <h3>Data access MapState: {{ count }}</h3>
  <hr>
  <h1>Mutations</h1>
  <button @click="increment">+1</button>
  <button @click="incrementBy">+5</button>
  <button>Random</button>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    countComputed() {
      return this.$store.state.count;
    },
    ...mapState(['count']),
  },
  methods: {
      increment() {
          this.$store.commit('increment')
      },
      incrementBy() {
          this.$store.commit('incrementBy', 5)
      }
  }
};
</script>

<style>
</style>
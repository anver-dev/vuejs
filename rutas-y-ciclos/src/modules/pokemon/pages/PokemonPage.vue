<template>
  <h1>Pokemon: #{{ pokemonId }}</h1>
  <div v-if="pokemon">
      <img :src="pokemon.sprites.front_default" :alt="pokemon.name">
  </div>
</template>
<script>
export default {
  props: {
    pokemonId: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      pokemon: null,
    };
  },
  created() {
    this.getPokemon();
  },
  methods: {
    async getPokemon() {
        try {
            const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${this.pokemonId}`).then(
              (res) => res.json()
            );
            console.log(pokemon);
            this.pokemon = pokemon
        } catch (error) {
            this.$router.push("/")
        }

    },
  },
  // observador
  watch: {
      pokemonId(){
          this.getPokemon()
      }
  }
};
</script>